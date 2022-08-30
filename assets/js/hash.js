// 'use strict';

(function (window) {
	var PARAMETER_EXPRESSION = /^([^=]+)(?:=(.*))?$/g;

	function removeItem(array, item) {
		var index = array.indexOf(item);
		if (index == -1) {
			return;
		}
		array.splice(index, 1);
	}

	function matchParameter(text) {
		PARAMETER_EXPRESSION.lastIndex = 0;
		return PARAMETER_EXPRESSION.exec(text);
	}

	function decodeComponent(part) {
		if (part) {
			return decodeURIComponent(part);
		}
		return null;
	}

	function parseParameters(request) {
		var parameters = { };
		var postfix = request.substring(1);
		if (postfix) {
			var parts = postfix.split('&');
			for (var i = 0; i < parts.length; ++i) {
				var part = parts[i];
				if (part) {
					var match = matchParameter(part);
					if (match) {
						var name = decodeComponent(match[1]);
						parameters[name] = decodeComponent(match[2]);
					}
				}
			}
		}
		return parameters;
	}

	function renderHash(parameters) {
		var postfix = '';
		for (var el in parameters) {
			var parameter = parameters[el];
			if (postfix) {
				postfix += '&';
			}
			postfix += encodeURIComponent(el);
			if (parameter) {
				postfix += '=' + encodeURIComponent(parameter);
			}
		}
		return '#' + postfix;
	}

	window.HashParameters = new function() {
		var cache = null;     // current hash for changes detection

		var parameters = { }; // parsed and decoded parameters
		var listeners = [ ];  // hash initialized or typed event methods

		function updateParameters() {
			var hash = location.hash;
			if (hash == cache) {
				return false;
			}
			parameters = parseParameters(cache = hash);
			return true;
		}

		function updateHash() {
			var hash = renderHash(parameters);
			if (hash == cache) {
				return false;
			}
			location.hash = cache = hash;
			return true;
		}

		function fireListeners() {
			for (var i = 0; i < listeners.length; ++i) {
				var listener = listeners[i];
				listener.call(window);
			}
		}

		window.addEventListener('hashchange', function () {
			if (updateParameters()) {
				fireListeners();
			}
		});

		updateParameters();

		// public methods

		this.addListener = function(action) {
			if (action instanceof Function) {
				listeners.push(action);
				var result = function() {
					if (action) {
						removeItem(listeners, action);
						action = null;
					}
				};
				return result;
			}
			throw new Error('Indicated listener action is not function type.');
		};

		this.removeListener = function(action) {
			removeItem(listeners, action);
		};

		this.getParameters = function() {
			var result = [ ];
			for (var key in parameters) {
				result.push({name: key, value: parameters[key]});
			}
			return result;
		};

		this.getParameter = function(name, defaultValue) {
			return parameters[name] || defaultValue;
		};

		this.setParameter = function(name, value) {
			parameters[name] = value;
			updateHash();
		};

		this.removeParameter = function(name) {
			delete parameters[name];
			updateHash();
		};

		this.clearParameters = function() {
			parameters = { };
			updateHash();
		};
	};
})(window);