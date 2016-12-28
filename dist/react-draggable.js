(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactDraggable"] = factory(require("react"), require("react-dom"));
	else
		root["ReactDraggable"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(1).default;
	module.exports.DraggableCore = __webpack_require__(9).default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _domFns = __webpack_require__(5);
	
	var _positionFns = __webpack_require__(8);
	
	var _shims = __webpack_require__(6);
	
	var _DraggableCore = __webpack_require__(9);
	
	var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
	
	var _log = __webpack_require__(11);
	
	var _log2 = _interopRequireDefault(_log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// $FlowIgnore
	
	
	/*:: import type {DraggableEventHandler} from './utils/types';*/
	/*:: type DraggableState = {
	  dragging: boolean,
	  dragged: boolean,
	  x: number, y: number,
	  slackX: number, slackY: number,
	  isElementSVG: boolean
	};*/
	
	
	//
	// Define <Draggable>
	//
	
	/*:: type ConstructorProps = {
	  position: { x: number, y: number },
	  defaultPosition: { x: number, y: number }
	};*/
	
	var Draggable = function (_React$Component) {
	  _inherits(Draggable, _React$Component);
	
	  function Draggable(props /*: ConstructorProps*/) {
	    _classCallCheck(this, Draggable);
	
	    var _this = _possibleConstructorReturn(this, (Draggable.__proto__ || Object.getPrototypeOf(Draggable)).call(this, props));
	
	    _this.onDragStart = function (e, coreData) {
	      (0, _log2.default)('Draggable: onDragStart: %j', coreData);
	
	      // Short-circuit if user's callback killed it.
	      var shouldStart = _this.props.onStart(e, (0, _positionFns.createDraggableData)(_this, coreData));
	      // Kills start event on core as well, so move handlers are never bound.
	      if (shouldStart === false) return false;
	
	      _this.setState({ dragging: true, dragged: true });
	    };
	
	    _this.onDrag = function (e, coreData) {
	      if (!_this.state.dragging) return false;
	      (0, _log2.default)('Draggable: onDrag: %j', coreData);
	
	      var uiData = (0, _positionFns.createDraggableData)(_this, coreData);
	
	      var newState /*: $Shape<DraggableState>*/ = {
	        x: uiData.x,
	        y: uiData.y
	      };
	
	      // Keep within bounds.
	      if (_this.props.bounds) {
	        // Save original x and y.
	        var _x = newState.x,
	            _y = newState.y;
	
	        // Add slack to the values used to calculate bound position. This will ensure that if
	        // we start removing slack, the element won't react to it right away until it's been
	        // completely removed.
	
	        newState.x += _this.state.slackX;
	        newState.y += _this.state.slackY;
	
	        // Get bound position. This will ceil/floor the x and y within the boundaries.
	        // $FlowBug
	
	        // Recalculate slack by noting how much was shaved by the boundPosition handler.
	        var _getBoundPosition = (0, _positionFns.getBoundPosition)(_this, newState.x, newState.y);
	
	        var _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2);
	
	        newState.x = _getBoundPosition2[0];
	        newState.y = _getBoundPosition2[1];
	        newState.slackX = _this.state.slackX + (_x - newState.x);
	        newState.slackY = _this.state.slackY + (_y - newState.y);
	
	        // Update the event we fire to reflect what really happened after bounds took effect.
	        uiData.x = _x;
	        uiData.y = _y;
	        uiData.deltaX = newState.x - _this.state.x;
	        uiData.deltaY = newState.y - _this.state.y;
	      }
	
	      // Short-circuit if user's callback killed it.
	      var shouldUpdate = _this.props.onDrag(e, uiData);
	      if (shouldUpdate === false) return false;
	
	      _this.setState(newState);
	    };
	
	    _this.onDragStop = function (e, coreData) {
	      if (!_this.state.dragging) return false;
	
	      // Short-circuit if user's callback killed it.
	      var shouldStop = _this.props.onStop(e, (0, _positionFns.createDraggableData)(_this, coreData));
	      if (shouldStop === false) return false;
	
	      (0, _log2.default)('Draggable: onDragStop: %j', coreData);
	
	      var newState /*: $Shape<DraggableState>*/ = {
	        dragging: false,
	        slackX: 0,
	        slackY: 0
	      };
	
	      // If this is a controlled component, the result of this operation will be to
	      // revert back to the old position. We expect a handler on `onDragStop`, at the least.
	      var controlled = Boolean(_this.props.position);
	      if (controlled) {
	        var _this$props$position = _this.props.position,
	            _x2 = _this$props$position.x,
	            _y2 = _this$props$position.y;
	
	        newState.x = _x2;
	        newState.y = _y2;
	      }
	
	      _this.setState(newState);
	    };
	
	    _this.state = {
	      // Whether or not we are currently dragging.
	      dragging: false,
	
	      // Whether or not we have been dragged before.
	      dragged: false,
	
	      // Current transform x and y.
	      x: props.position ? props.position.x : props.defaultPosition.x,
	      y: props.position ? props.position.y : props.defaultPosition.y,
	
	      // Used for compensating for out-of-bounds drags
	      slackX: 0, slackY: 0,
	
	      // Can only determine if SVG after mounting
	      isElementSVG: false
	    };
	    return _this;
	  }
	
	  _createClass(Draggable, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (this.props.position && !(this.props.onDrag || this.props.onStop)) {
	        // eslint-disable-next-line
	        console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // Check to see if the element passed is an instanceof SVGElement
	      if (typeof SVGElement !== 'undefined' && _reactDom2.default.findDOMNode(this) instanceof SVGElement) {
	        this.setState({ isElementSVG: true });
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps /*: Object*/) {
	      // Set x/y if position has changed
	      if (nextProps.position && (!this.props.position || nextProps.position.x !== this.props.position.x || nextProps.position.y !== this.props.position.y)) {
	        this.setState({ x: nextProps.position.x, y: nextProps.position.y });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.setState({ dragging: false }); // prevents invariant if unmounted while dragging
	    }
	  }, {
	    key: 'render',
	    value: function render() /*: React.Element<any>*/ {
	      var _classNames;
	
	      var style = {},
	          svgTransform = null;
	
	      // If this is controlled, we don't want to move it - unless it's dragging.
	      var controlled = Boolean(this.props.position);
	      var draggable = !controlled || this.state.dragging;
	
	      var position = this.props.position || this.props.defaultPosition;
	      var transformOpts = {
	        // Set left if horizontal drag is enabled
	        x: (0, _positionFns.canDragX)(this) && draggable ? this.state.x : position.x,
	
	        // Set top if vertical drag is enabled
	        y: (0, _positionFns.canDragY)(this) && draggable ? this.state.y : position.y
	      };
	
	      // If this element was SVG, we use the `transform` attribute.
	      if (this.state.isElementSVG) {
	        svgTransform = (0, _domFns.createSVGTransform)(transformOpts);
	      } else {
	        // Add a CSS transform to move the element around. This allows us to move the element around
	        // without worrying about whether or not it is relatively or absolutely positioned.
	        // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
	        // has a clean slate.
	        style = (0, _domFns.createCSSTransform)(transformOpts);
	      }
	
	      var _props = this.props,
	          defaultClassName = _props.defaultClassName,
	          defaultClassNameDragging = _props.defaultClassNameDragging,
	          defaultClassNameDragged = _props.defaultClassNameDragged;
	
	      // Mark with class while dragging
	
	      var className = (0, _classnames2.default)(this.props.children.props.className || '', defaultClassName, (_classNames = {}, _defineProperty(_classNames, defaultClassNameDragging, this.state.dragging), _defineProperty(_classNames, defaultClassNameDragged, this.state.dragged), _classNames));
	
	      // Reuse the child provided
	      // This makes it flexible to use whatever element is wanted (div, ul, etc)
	      return _react2.default.createElement(
	        _DraggableCore2.default,
	        _extends({}, this.props, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }),
	        _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
	          className: className,
	          style: _extends({}, this.props.children.props.style, style),
	          transform: svgTransform
	        })
	      );
	    }
	  }]);
	
	  return Draggable;
	}(_react2.default.Component);
	
	Draggable.displayName = 'Draggable';
	Draggable.propTypes = _extends({}, _DraggableCore2.default.propTypes, {
	
	  /**
	   * `axis` determines which axis the draggable can move.
	   *
	   *  Note that all callbacks will still return data as normal. This only
	   *  controls flushing to the DOM.
	   *
	   * 'both' allows movement horizontally and vertically.
	   * 'x' limits movement to horizontal axis.
	   * 'y' limits movement to vertical axis.
	   * 'none' limits all movement.
	   *
	   * Defaults to 'both'.
	   */
	  axis: _react.PropTypes.oneOf(['both', 'x', 'y', 'none']),
	
	  /**
	   * `bounds` determines the range of movement available to the element.
	   * Available values are:
	   *
	   * 'parent' restricts movement within the Draggable's parent node.
	   *
	   * Alternatively, pass an object with the following properties, all of which are optional:
	   *
	   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
	   *
	   * All values are in px.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *         return (
	   *            <Draggable bounds={{right: 300, bottom: 300}}>
	   *              <div>Content</div>
	   *           </Draggable>
	   *         );
	   *       }
	   *   });
	   * ```
	   */
	  bounds: _react.PropTypes.oneOfType([_react.PropTypes.shape({
	    left: _react.PropTypes.number,
	    right: _react.PropTypes.number,
	    top: _react.PropTypes.number,
	    bottom: _react.PropTypes.number
	  }), _react.PropTypes.string, _react.PropTypes.oneOf([false])]),
	
	  defaultClassName: _react.PropTypes.string,
	  defaultClassNameDragging: _react.PropTypes.string,
	  defaultClassNameDragged: _react.PropTypes.string,
	
	  /**
	   * `defaultPosition` specifies the x and y that the dragged item should start at
	   *
	   * Example:
	   *
	   * ```jsx
	   *      let App = React.createClass({
	   *          render: function () {
	   *              return (
	   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
	   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
	   *                  </Draggable>
	   *              );
	   *          }
	   *      });
	   * ```
	   */
	  defaultPosition: _react.PropTypes.shape({
	    x: _react.PropTypes.number,
	    y: _react.PropTypes.number
	  }),
	
	  /**
	   * `position`, if present, defines the current position of the element.
	   *
	   *  This is similar to how form elements in React work - if no `position` is supplied, the component
	   *  is uncontrolled.
	   *
	   * Example:
	   *
	   * ```jsx
	   *      let App = React.createClass({
	   *          render: function () {
	   *              return (
	   *                  <Draggable position={{x: 25, y: 25}}>
	   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
	   *                  </Draggable>
	   *              );
	   *          }
	   *      });
	   * ```
	   */
	  position: _react.PropTypes.shape({
	    x: _react.PropTypes.number,
	    y: _react.PropTypes.number
	  }),
	
	  /**
	   * These properties should be defined on the child, not here.
	   */
	  className: _shims.dontSetMe,
	  style: _shims.dontSetMe,
	  transform: _shims.dontSetMe
	});
	Draggable.defaultProps = _extends({}, _DraggableCore2.default.defaultProps, {
	  axis: 'both',
	  bounds: false,
	  defaultClassName: 'react-draggable',
	  defaultClassNameDragging: 'react-draggable-dragging',
	  defaultClassNameDragged: 'react-draggable-dragged',
	  defaultPosition: { x: 0, y: 0 },
	  position: null
	});
	exports.default = Draggable;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.matchesSelector = matchesSelector;
	exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
	exports.addEvent = addEvent;
	exports.removeEvent = removeEvent;
	exports.outerHeight = outerHeight;
	exports.outerWidth = outerWidth;
	exports.innerHeight = innerHeight;
	exports.innerWidth = innerWidth;
	exports.offsetXYFromParent = offsetXYFromParent;
	exports.createCSSTransform = createCSSTransform;
	exports.createSVGTransform = createSVGTransform;
	exports.getTouch = getTouch;
	exports.getTouchIdentifier = getTouchIdentifier;
	exports.addUserSelectStyles = addUserSelectStyles;
	exports.removeUserSelectStyles = removeUserSelectStyles;
	exports.styleHacks = styleHacks;
	
	var _shims = __webpack_require__(6);
	
	var _getPrefix = __webpack_require__(7);
	
	var _getPrefix2 = _interopRequireDefault(_getPrefix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/*:: import type {ControlPosition} from './types';*/
	
	
	var matchesSelectorFunc = '';
	function matchesSelector(el /*: Node*/, selector /*: string*/) /*: boolean*/ {
	  if (!matchesSelectorFunc) {
	    matchesSelectorFunc = (0, _shims.findInArray)(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
	      // $FlowIgnore: Doesn't think elements are indexable
	      return (0, _shims.isFunction)(el[method]);
	    });
	  }
	
	  // $FlowIgnore: Doesn't think elements are indexable
	  return el[matchesSelectorFunc].call(el, selector);
	}
	
	// Works up the tree to the draggable itself attempting to match selector.
	function matchesSelectorAndParentsTo(el /*: Node*/, selector /*: string*/, baseNode /*: Node*/) /*: boolean*/ {
	  var node = el;
	  do {
	    if (matchesSelector(node, selector)) return true;
	    if (node === baseNode) return false;
	    node = node.parentNode;
	  } while (node);
	
	  return false;
	}
	
	function addEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
	  if (!el) {
	    return;
	  }
	  if (el.attachEvent) {
	    el.attachEvent('on' + event, handler);
	  } else if (el.addEventListener) {
	    el.addEventListener(event, handler, true);
	  } else {
	    // $FlowIgnore: Doesn't think elements are indexable
	    el['on' + event] = handler;
	  }
	}
	
	function removeEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
	  if (!el) {
	    return;
	  }
	  if (el.detachEvent) {
	    el.detachEvent('on' + event, handler);
	  } else if (el.removeEventListener) {
	    el.removeEventListener(event, handler, true);
	  } else {
	    // $FlowIgnore: Doesn't think elements are indexable
	    el['on' + event] = null;
	  }
	}
	
	function outerHeight(node /*: HTMLElement*/) /*: number*/ {
	  // This is deliberately excluding margin for our calculations, since we are using
	  // offsetTop which is including margin. See getBoundPosition
	  var height = node.clientHeight;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  height += (0, _shims.int)(computedStyle.borderTopWidth);
	  height += (0, _shims.int)(computedStyle.borderBottomWidth);
	  return height;
	}
	
	function outerWidth(node /*: HTMLElement*/) /*: number*/ {
	  // This is deliberately excluding margin for our calculations, since we are using
	  // offsetLeft which is including margin. See getBoundPosition
	  var width = node.clientWidth;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  width += (0, _shims.int)(computedStyle.borderLeftWidth);
	  width += (0, _shims.int)(computedStyle.borderRightWidth);
	  return width;
	}
	function innerHeight(node /*: HTMLElement*/) /*: number*/ {
	  var height = node.clientHeight;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  height -= (0, _shims.int)(computedStyle.paddingTop);
	  height -= (0, _shims.int)(computedStyle.paddingBottom);
	  return height;
	}
	
	function innerWidth(node /*: HTMLElement*/) /*: number*/ {
	  var width = node.clientWidth;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  width -= (0, _shims.int)(computedStyle.paddingLeft);
	  width -= (0, _shims.int)(computedStyle.paddingRight);
	  return width;
	}
	
	// Get from offsetParent
	function offsetXYFromParent(evt /*: {clientX: number, clientY: number}*/, offsetParent /*: HTMLElement*/) /*: ControlPosition*/ {
	  var isBody = offsetParent === offsetParent.ownerDocument.body;
	  var offsetParentRect = isBody ? { left: 0, top: 0 } : offsetParent.getBoundingClientRect();
	
	  var x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
	  var y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;
	
	  return { x: x, y: y };
	}
	
	function createCSSTransform(_ref) /*: Object*/ {
	  var x = _ref.x,
	      y = _ref.y;
	
	  // Replace unitless items with px
	  return _defineProperty({}, (0, _getPrefix.browserPrefixToKey)('transform', _getPrefix2.default), 'translate3d(' + x + 'px,' + y + 'px, 0)');
	}
	
	function createSVGTransform(_ref3) /*: string*/ {
	  var x = _ref3.x,
	      y = _ref3.y;
	
	  return 'translate3d(' + x + ',' + y + ', 0)';
	}
	
	function getTouch(e /*: MouseTouchEvent*/, identifier /*: number*/) /*: ?{clientX: number, clientY: number}*/ {
	  return e.targetTouches && (0, _shims.findInArray)(e.targetTouches, function (t) {
	    return identifier === t.identifier;
	  }) || e.changedTouches && (0, _shims.findInArray)(e.changedTouches, function (t) {
	    return identifier === t.identifier;
	  });
	}
	
	function getTouchIdentifier(e /*: MouseTouchEvent*/) /*: ?number*/ {
	  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
	  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
	}
	
	// User-select Hacks:
	//
	// Useful for preventing blue highlights all over everything when dragging.
	var userSelectPrefix = (0, _getPrefix.getPrefix)('user-select');
	var userSelect = (0, _getPrefix.browserPrefixToStyle)('user-select', userSelectPrefix);
	var userSelectStyle = ';' + userSelect + ': none;';
	var userSelectReplaceRegExp = new RegExp(';?' + userSelect + ': none;'); // leading ; not present on IE
	
	// Note we're passing `document` b/c we could be iframed
	function addUserSelectStyles(body /*: HTMLElement*/) {
	  var style = body.getAttribute('style') || '';
	  body.setAttribute('style', style + userSelectStyle);
	}
	
	function removeUserSelectStyles(body /*: HTMLElement*/) {
	  var style = body.getAttribute('style') || '';
	  body.setAttribute('style', style.replace(userSelectReplaceRegExp, ''));
	}
	
	function styleHacks() /*: Object*/ {
	  var childStyle /*: Object*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  // Workaround IE pointer events; see #51
	  // https://github.com/mzabriskie/react-draggable/issues/51#issuecomment-103488278
	  return _extends({
	    touchAction: 'none'
	  }, childStyle);
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.findInArray = findInArray;
	exports.isFunction = isFunction;
	exports.isNum = isNum;
	exports.int = int;
	exports.dontSetMe = dontSetMe;
	
	// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
	function findInArray(array /*: Array<any> | TouchList*/, callback /*: Function*/) /*: any*/ {
	  for (var i = 0, length = array.length; i < length; i++) {
	    if (callback.apply(callback, [array[i], i, array])) return array[i];
	  }
	}
	
	function isFunction(func /*: any*/) /*: boolean*/ {
	  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
	}
	
	function isNum(num /*: any*/) /*: boolean*/ {
	  return typeof num === 'number' && !isNaN(num);
	}
	
	function int(a /*: string*/) /*: number*/ {
	  return parseInt(a, 10);
	}
	
	function dontSetMe(props /*: Object*/, propName /*: string*/, componentName /*: string*/) {
	  if (props[propName]) {
	    return new Error('Invalid prop ' + propName + ' passed to ' + componentName + ' - do not set this, set it on the child.');
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPrefix = getPrefix;
	exports.browserPrefixToKey = browserPrefixToKey;
	exports.browserPrefixToStyle = browserPrefixToStyle;
	var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
	function getPrefix() /*: string*/ {
	  var prop /*: string*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
	
	  // Checking specifically for 'window.document' is for pseudo-browser server-side
	  // environments that define 'window' as the global context.
	  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
	  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';
	
	  var style = window.document.documentElement.style;
	
	  if (prop in style) return '';
	
	  for (var i = 0; i < prefixes.length; i++) {
	    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
	  }
	
	  return '';
	}
	
	function browserPrefixToKey(prop /*: string*/, prefix /*: string*/) /*: string*/ {
	  return prefix ? '' + prefix + kebabToTitleCase(prop) : prop;
	}
	
	function browserPrefixToStyle(prop /*: string*/, prefix /*: string*/) /*: string*/ {
	  return prefix ? '-' + prefix.toLowerCase() + '-' + prop : prop;
	}
	
	function kebabToTitleCase(str /*: string*/) /*: string*/ {
	  var out = '';
	  var shouldCapitalize = true;
	  for (var i = 0; i < str.length; i++) {
	    if (shouldCapitalize) {
	      out += str[i].toUpperCase();
	      shouldCapitalize = false;
	    } else if (str[i] === '-') {
	      shouldCapitalize = true;
	    } else {
	      out += str[i];
	    }
	  }
	  return out;
	}
	
	// Default export is the prefix itself, like 'Moz', 'Webkit', etc
	// Note that you may have to re-test for certain things; for instance, Chrome 50
	// can handle unprefixed `transform`, but not unprefixed `user-select`
	exports.default = getPrefix();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getBoundPosition = getBoundPosition;
	exports.snapToGrid = snapToGrid;
	exports.canDragX = canDragX;
	exports.canDragY = canDragY;
	exports.getControlPosition = getControlPosition;
	exports.createCoreData = createCoreData;
	exports.createDraggableData = createDraggableData;
	
	var _shims = __webpack_require__(6);
	
	var _reactDom = __webpack_require__(3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domFns = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*:: import type Draggable from '../Draggable';*/
	/*:: import type {Bounds, ControlPosition, DraggableData} from './types';*/
	/*:: import type DraggableCore from '../DraggableCore';*/
	function getBoundPosition(draggable /*: Draggable*/, x /*: number*/, y /*: number*/) /*: [number, number]*/ {
	  // If no bounds, short-circuit and move on
	  if (!draggable.props.bounds) return [x, y];
	
	  // Clone new bounds
	  var bounds = draggable.props.bounds;
	
	  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
	  var node = _reactDom2.default.findDOMNode(draggable);
	
	  if (typeof bounds === 'string') {
	    var ownerDocument = node.ownerDocument;
	
	    var ownerWindow = ownerDocument.defaultView;
	    var boundNode = void 0;
	    if (bounds === 'parent') {
	      boundNode = node.parentNode;
	    } else {
	      boundNode = ownerDocument.querySelector(bounds);
	      if (!boundNode) throw new Error('Bounds selector "' + bounds + '" could not find an element.');
	    }
	    var nodeStyle = ownerWindow.getComputedStyle(node);
	    var boundNodeStyle = ownerWindow.getComputedStyle(boundNode);
	    // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
	    bounds = {
	      left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.borderLeftWidth) + (0, _shims.int)(nodeStyle.marginLeft),
	      top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.borderTopWidth) + (0, _shims.int)(nodeStyle.marginTop),
	      right: (0, _domFns.innerWidth)(boundNode) - (0, _domFns.outerWidth)(node) - node.offsetLeft,
	      bottom: (0, _domFns.innerHeight)(boundNode) - (0, _domFns.outerHeight)(node) - node.offsetTop
	    };
	  }
	
	  // Keep x and y below right and bottom limits...
	  if ((0, _shims.isNum)(bounds.right)) x = Math.min(x, bounds.right);
	  if ((0, _shims.isNum)(bounds.bottom)) y = Math.min(y, bounds.bottom);
	
	  // But above left and top limits.
	  if ((0, _shims.isNum)(bounds.left)) x = Math.max(x, bounds.left);
	  if ((0, _shims.isNum)(bounds.top)) y = Math.max(y, bounds.top);
	
	  return [x, y];
	}
	
	function snapToGrid(grid /*: [number, number]*/, pendingX /*: number*/, pendingY /*: number*/) /*: [number, number]*/ {
	  var x = Math.round(pendingX / grid[0]) * grid[0];
	  var y = Math.round(pendingY / grid[1]) * grid[1];
	  return [x, y];
	}
	
	function canDragX(draggable /*: Draggable*/) /*: boolean*/ {
	  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
	}
	
	function canDragY(draggable /*: Draggable*/) /*: boolean*/ {
	  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
	}
	
	// Get {x, y} positions from event.
	function getControlPosition(e /*: MouseTouchEvent*/, touchIdentifier /*: ?number*/, draggableCore /*: DraggableCore*/) /*: ?ControlPosition*/ {
	  var touchObj = typeof touchIdentifier === 'number' ? (0, _domFns.getTouch)(e, touchIdentifier) : null;
	  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch
	  var node = _reactDom2.default.findDOMNode(draggableCore);
	  // User can provide an offsetParent if desired.
	  var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
	  return (0, _domFns.offsetXYFromParent)(touchObj || e, offsetParent);
	}
	
	// Create an data object exposed by <DraggableCore>'s events
	function createCoreData(draggable /*: DraggableCore*/, x /*: number*/, y /*: number*/) /*: DraggableData*/ {
	  var state = draggable.state;
	  var isStart = !(0, _shims.isNum)(state.lastX);
	
	  if (isStart) {
	    // If this is our first move, use the x and y as last coords.
	    return {
	      node: _reactDom2.default.findDOMNode(draggable),
	      deltaX: 0, deltaY: 0,
	      lastX: x, lastY: y,
	      x: x, y: y
	    };
	  } else {
	    // Otherwise calculate proper values.
	    return {
	      node: _reactDom2.default.findDOMNode(draggable),
	      deltaX: x - state.lastX, deltaY: y - state.lastY,
	      lastX: state.lastX, lastY: state.lastY,
	      x: x, y: y
	    };
	  }
	}
	
	// Create an data exposed by <Draggable>'s events
	function createDraggableData(draggable /*: Draggable*/, coreData /*: DraggableData*/) /*: DraggableData*/ {
	  return {
	    node: coreData.node,
	    x: draggable.state.x + coreData.deltaX,
	    y: draggable.state.y + coreData.deltaY,
	    deltaX: coreData.deltaX,
	    deltaY: coreData.deltaY,
	    lastX: draggable.state.x,
	    lastY: draggable.state.y
	  };
	}
	
	// A lot faster than stringify/parse
	function cloneBounds(bounds /*: Bounds*/) /*: Bounds*/ {
	  return {
	    left: bounds.left,
	    top: bounds.top,
	    right: bounds.right,
	    bottom: bounds.bottom
	  };
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domFns = __webpack_require__(5);
	
	var _positionFns = __webpack_require__(8);
	
	var _shims = __webpack_require__(6);
	
	var _log = __webpack_require__(11);
	
	var _log2 = _interopRequireDefault(_log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Simple abstraction for dragging events names.
	/*:: import type {EventHandler} from './utils/types';*/
	var eventsFor = {
	  touch: {
	    start: 'touchstart',
	    move: 'touchmove',
	    stop: 'touchend'
	  },
	  mouse: {
	    start: 'mousedown',
	    move: 'mousemove',
	    stop: 'mouseup'
	  }
	};
	
	// Default to mouse events.
	var dragEventFor = eventsFor.mouse;
	
	//
	// Define <DraggableCore>.
	//
	// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
	// work well with libraries that require more control over the element.
	//
	
	/*:: type CoreState = {
	  dragging: boolean,
	  lastX: number,
	  lastY: number,
	  touchIdentifier: ?number
	};*/
	
	var DraggableCore = function (_React$Component) {
	  _inherits(DraggableCore, _React$Component);
	
	  function DraggableCore() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, DraggableCore);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DraggableCore.__proto__ || Object.getPrototypeOf(DraggableCore)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      dragging: false,
	      // Used while dragging to determine deltas.
	      lastX: NaN, lastY: NaN,
	      touchIdentifier: null
	    }, _this.handleDragStart = function (e) {
	      // Make it possible to attach event handlers on top of this one.
	      _this.props.onMouseDown(e);
	
	      // Only accept left-clicks.
	      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false;
	
	      // Get nodes. Be sure to grab relative document (could be iframed)
	      var domNode = _reactDom2.default.findDOMNode(_this);
	      var ownerDocument = domNode.ownerDocument;
	
	      // Short circuit if handle or cancel prop was provided and selector doesn't match.
	
	      if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.handle, domNode) || _this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.cancel, domNode)) {
	        return;
	      }
	
	      // Set touch identifier in component state if this is a touch event. This allows us to
	      // distinguish between individual touches on multitouch screens by identifying which
	      // touchpoint was set to this element.
	      var touchIdentifier = (0, _domFns.getTouchIdentifier)(e);
	      _this.setState({ touchIdentifier: touchIdentifier });
	
	      // Get the current drag point from the event. This is used as the offset.
	      var position = (0, _positionFns.getControlPosition)(e, touchIdentifier, _this);
	      if (position == null) return; // not possible but satisfies flow
	      var x = position.x,
	          y = position.y;
	
	      // Create an event object with all the data parents need to make a decision here.
	
	      var coreEvent = (0, _positionFns.createCoreData)(_this, x, y);
	
	      (0, _log2.default)('DraggableCore: handleDragStart: %j', coreEvent);
	
	      // Call event handler. If it returns explicit false, cancel.
	      (0, _log2.default)('calling', _this.props.onStart);
	      var shouldUpdate = _this.props.onStart(e, coreEvent);
	      if (shouldUpdate === false) return;
	
	      // Add a style to the body to disable user-select. This prevents text from
	      // being selected all over the page.
	      if (_this.props.enableUserSelectHack) (0, _domFns.addUserSelectStyles)(ownerDocument.body);
	
	      // Initiate dragging. Set the current x and y as offsets
	      // so we know how much we've moved during the drag. This allows us
	      // to drag elements around even if they have been moved, without issue.
	      _this.setState({
	        dragging: true,
	
	        lastX: x,
	        lastY: y
	      });
	
	      // Add events to the document directly so we catch when the user's mouse/touch moves outside of
	      // this element. We use different events depending on whether or not we have detected that this
	      // is a touch-capable device.
	      (0, _domFns.addEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
	      (0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
	    }, _this.handleDrag = function (e) {
	
	      // Prevent scrolling on mobile devices, like ipad/iphone.
	      if (e.type === 'touchmove') e.preventDefault();
	
	      // Get the current drag point from the event. This is used as the offset.
	      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _this);
	      if (position == null) return;
	      var x = position.x,
	          y = position.y;
	
	      // Snap to grid if prop has been provided
	
	      if (x !== x) debugger;
	
	      if (Array.isArray(_this.props.grid)) {
	        var deltaX = x - _this.state.lastX,
	            deltaY = y - _this.state.lastY;
	
	        var _snapToGrid = (0, _positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);
	
	        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);
	
	        deltaX = _snapToGrid2[0];
	        deltaY = _snapToGrid2[1];
	
	        if (!deltaX && !deltaY) return; // skip useless drag
	        x = _this.state.lastX + deltaX, y = _this.state.lastY + deltaY;
	      }
	
	      var coreEvent = (0, _positionFns.createCoreData)(_this, x, y);
	
	      (0, _log2.default)('DraggableCore: handleDrag: %j', coreEvent);
	
	      // Call event handler. If it returns explicit false, trigger end.
	      var shouldUpdate = _this.props.onDrag(e, coreEvent);
	      if (shouldUpdate === false) {
	        try {
	          // $FlowIgnore
	          _this.handleDragStop(new MouseEvent('mouseup'));
	        } catch (err) {
	          // Old browsers
	          var event = ((document.createEvent('MouseEvents') /*: any*/) /*: MouseTouchEvent*/);
	          // I see why this insanity was deprecated
	          // $FlowIgnore
	          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	          _this.handleDragStop(event);
	        }
	        return;
	      }
	
	      _this.setState({
	        lastX: x,
	        lastY: y
	      });
	    }, _this.handleDragStop = function (e) {
	      if (!_this.state.dragging) return;
	
	      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _this);
	      if (position == null) return;
	      var x = position.x,
	          y = position.y;
	
	      var coreEvent = (0, _positionFns.createCoreData)(_this, x, y);
	
	      var _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(_this),
	          ownerDocument = _ReactDOM$findDOMNode.ownerDocument;
	
	      // Remove user-select hack
	
	
	      if (_this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(ownerDocument.body);
	
	      (0, _log2.default)('DraggableCore: handleDragStop: %j', coreEvent);
	
	      // Reset the el.
	      _this.setState({
	        dragging: false,
	        lastX: NaN,
	        lastY: NaN
	      });
	
	      // Call event handler
	      _this.props.onStop(e, coreEvent);
	
	      // Remove event handlers
	      (0, _log2.default)('DraggableCore: Removing handlers');
	      (0, _domFns.removeEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
	      (0, _domFns.removeEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
	    }, _this.onMouseDown = function (e) {
	      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse
	
	      return _this.handleDragStart(e);
	    }, _this.onMouseUp = function (e) {
	      dragEventFor = eventsFor.mouse;
	
	      return _this.handleDragStop(e);
	    }, _this.onTouchStart = function (e) {
	      // We're on a touch device now, so change the event handlers
	      dragEventFor = eventsFor.touch;
	
	      return _this.handleDragStart(e);
	    }, _this.onTouchEnd = function (e) {
	      // We're on a touch device now, so change the event handlers
	      dragEventFor = eventsFor.touch;
	
	      return _this.handleDragStop(e);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(DraggableCore, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // Remove any leftover event handlers. Remove both touch and mouse handlers in case
	      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.
	      var _ReactDOM$findDOMNode2 = _reactDom2.default.findDOMNode(this),
	          ownerDocument = _ReactDOM$findDOMNode2.ownerDocument;
	
	      (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
	      (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
	      (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
	      (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
	      if (this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(ownerDocument.body);
	    }
	
	    // Same as onMouseDown (start drag), but now consider this a touch device.
	
	  }, {
	    key: 'render',
	    value: function render() /*: React.Element<any>*/ {
	      // Reuse the child provided
	      // This makes it flexible to use whatever element is wanted (div, ul, etc)
	      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
	        style: (0, _domFns.styleHacks)(this.props.children.props.style),
	
	        // Note: mouseMove handler is attached to document so it will still function
	        // when the user drags quickly and leaves the bounds of the element.
	        onMouseDown: this.onMouseDown,
	        onTouchStart: this.onTouchStart,
	        onMouseUp: this.onMouseUp,
	        onTouchEnd: this.onTouchEnd
	      });
	    }
	  }]);
	
	  return DraggableCore;
	}(_react2.default.Component);
	
	DraggableCore.displayName = 'DraggableCore';
	DraggableCore.propTypes = {
	  /**
	   * `allowAnyClick` allows dragging using any mouse button.
	   * By default, we only accept the left button.
	   *
	   * Defaults to `false`.
	   */
	  allowAnyClick: _react.PropTypes.bool,
	
	  /**
	   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
	   * with the exception of `onMouseDown`, will not fire.
	   */
	  disabled: _react.PropTypes.bool,
	
	  /**
	   * By default, we add 'user-select:none' attributes to the document body
	   * to prevent ugly text selection during drag. If this is causing problems
	   * for your app, set this to `false`.
	   */
	  enableUserSelectHack: _react.PropTypes.bool,
	
	  /**
	   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
	   * instead of using the parent node.
	   */
	  offsetParent: function offsetParent(props, propName) {
	    if (process.browser && props[propName] && props[propName].nodeType !== 1) {
	      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
	    }
	  },
	
	  /**
	   * `grid` specifies the x and y that dragging should snap to.
	   */
	  grid: _react.PropTypes.arrayOf(_react.PropTypes.number),
	
	  /**
	   * `handle` specifies a selector to be used as the handle that initiates drag.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *         return (
	   *            <Draggable handle=".handle">
	   *              <div>
	   *                  <div className="handle">Click me to drag</div>
	   *                  <div>This is some other content</div>
	   *              </div>
	   *           </Draggable>
	   *         );
	   *       }
	   *   });
	   * ```
	   */
	  handle: _react.PropTypes.string,
	
	  /**
	   * `cancel` specifies a selector to be used to prevent drag initialization.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *           return(
	   *               <Draggable cancel=".cancel">
	   *                   <div>
	   *                     <div className="cancel">You can't drag from here</div>
	   *                     <div>Dragging here works fine</div>
	   *                   </div>
	   *               </Draggable>
	   *           );
	   *       }
	   *   });
	   * ```
	   */
	  cancel: _react.PropTypes.string,
	
	  /**
	   * Called when dragging starts.
	   * If this function returns the boolean false, dragging will be canceled.
	   */
	  onStart: _react.PropTypes.func,
	
	  /**
	   * Called while dragging.
	   * If this function returns the boolean false, dragging will be canceled.
	   */
	  onDrag: _react.PropTypes.func,
	
	  /**
	   * Called when dragging stops.
	   * If this function returns the boolean false, the drag will remain active.
	   */
	  onStop: _react.PropTypes.func,
	
	  /**
	   * A workaround option which can be passed if onMouseDown needs to be accessed,
	   * since it'll always be blocked (as there is internal use of onMouseDown)
	   */
	  onMouseDown: _react.PropTypes.func,
	
	  /**
	   * These properties should be defined on the child, not here.
	   */
	  className: _shims.dontSetMe,
	  style: _shims.dontSetMe,
	  transform: _shims.dontSetMe
	};
	DraggableCore.defaultProps = {
	  allowAnyClick: false, // by default only accept left click
	  cancel: null,
	  disabled: false,
	  enableUserSelectHack: true,
	  offsetParent: null,
	  handle: null,
	  grid: null,
	  transform: null,
	  onStart: function onStart() {},
	  onDrag: function onDrag() {},
	  onStop: function onStop() {},
	  onMouseDown: function onMouseDown() {}
	};
	exports.default = DraggableCore;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = log;
	
	/*eslint no-console:0*/
	function log() {
	  var _console;
	
	  if (true) (_console = console).log.apply(_console, arguments);
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIi4uL3dlYnBhY2svYm9vdHN0cmFwIDFhYmEzNjllYjMzODQ1NjkzMzYwIiwiLi4vLi9pbmRleC5qcyIsIi4uLy4vbGliL0RyYWdnYWJsZS5lczYiLCIuLi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIixcInJvb3RcIjpcIlJlYWN0XCJ9IiwiLi4vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCIsXCJyb290XCI6XCJSZWFjdERPTVwifSIsIi4uLy4vfi9jbGFzc25hbWVzL2luZGV4LmpzIiwiLi4vLi9saWIvdXRpbHMvZG9tRm5zLmVzNiIsIi4uLy4vbGliL3V0aWxzL3NoaW1zLmVzNiIsIi4uLy4vbGliL3V0aWxzL2dldFByZWZpeC5lczYiLCIuLi8uL2xpYi91dGlscy9wb3NpdGlvbkZucy5lczYiLCIuLi8uL2xpYi9EcmFnZ2FibGVDb3JlLmVzNiIsIi4uLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCIuLi8uL2xpYi91dGlscy9sb2cuZXM2Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiZGVmYXVsdCIsIkRyYWdnYWJsZUNvcmUiLCJEcmFnZ2FibGUiLCJwcm9wcyIsIm9uRHJhZ1N0YXJ0IiwiZSIsImNvcmVEYXRhIiwic2hvdWxkU3RhcnQiLCJvblN0YXJ0Iiwic2V0U3RhdGUiLCJkcmFnZ2luZyIsImRyYWdnZWQiLCJvbkRyYWciLCJzdGF0ZSIsInVpRGF0YSIsIm5ld1N0YXRlIiwieCIsInkiLCJib3VuZHMiLCJzbGFja1giLCJzbGFja1kiLCJkZWx0YVgiLCJkZWx0YVkiLCJzaG91bGRVcGRhdGUiLCJvbkRyYWdTdG9wIiwic2hvdWxkU3RvcCIsIm9uU3RvcCIsImNvbnRyb2xsZWQiLCJCb29sZWFuIiwicG9zaXRpb24iLCJkZWZhdWx0UG9zaXRpb24iLCJpc0VsZW1lbnRTVkciLCJjb25zb2xlIiwid2FybiIsIlNWR0VsZW1lbnQiLCJmaW5kRE9NTm9kZSIsIm5leHRQcm9wcyIsInN0eWxlIiwic3ZnVHJhbnNmb3JtIiwiZHJhZ2dhYmxlIiwidHJhbnNmb3JtT3B0cyIsImRlZmF1bHRDbGFzc05hbWUiLCJkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmciLCJkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiY2xvbmVFbGVtZW50IiwiQ2hpbGRyZW4iLCJvbmx5IiwidHJhbnNmb3JtIiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJheGlzIiwib25lT2YiLCJvbmVPZlR5cGUiLCJzaGFwZSIsImxlZnQiLCJudW1iZXIiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsInN0cmluZyIsImRlZmF1bHRQcm9wcyIsIm1hdGNoZXNTZWxlY3RvciIsIm1hdGNoZXNTZWxlY3RvckFuZFBhcmVudHNUbyIsImFkZEV2ZW50IiwicmVtb3ZlRXZlbnQiLCJvdXRlckhlaWdodCIsIm91dGVyV2lkdGgiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJvZmZzZXRYWUZyb21QYXJlbnQiLCJjcmVhdGVDU1NUcmFuc2Zvcm0iLCJjcmVhdGVTVkdUcmFuc2Zvcm0iLCJnZXRUb3VjaCIsImdldFRvdWNoSWRlbnRpZmllciIsImFkZFVzZXJTZWxlY3RTdHlsZXMiLCJyZW1vdmVVc2VyU2VsZWN0U3R5bGVzIiwic3R5bGVIYWNrcyIsIm1hdGNoZXNTZWxlY3RvckZ1bmMiLCJlbCIsInNlbGVjdG9yIiwibWV0aG9kIiwiY2FsbCIsImJhc2VOb2RlIiwibm9kZSIsInBhcmVudE5vZGUiLCJldmVudCIsImhhbmRsZXIiLCJhdHRhY2hFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXRhY2hFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjb21wdXRlZFN0eWxlIiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwiYm9yZGVyUmlnaHRXaWR0aCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJldnQiLCJvZmZzZXRQYXJlbnQiLCJpc0JvZHkiLCJib2R5Iiwib2Zmc2V0UGFyZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJzY3JvbGxMZWZ0IiwiY2xpZW50WSIsInNjcm9sbFRvcCIsImlkZW50aWZpZXIiLCJ0YXJnZXRUb3VjaGVzIiwidCIsImNoYW5nZWRUb3VjaGVzIiwidXNlclNlbGVjdFByZWZpeCIsInVzZXJTZWxlY3QiLCJ1c2VyU2VsZWN0U3R5bGUiLCJ1c2VyU2VsZWN0UmVwbGFjZVJlZ0V4cCIsIlJlZ0V4cCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJjaGlsZFN0eWxlIiwidG91Y2hBY3Rpb24iLCJmaW5kSW5BcnJheSIsImlzRnVuY3Rpb24iLCJpc051bSIsImludCIsImRvbnRTZXRNZSIsImFycmF5IiwiY2FsbGJhY2siLCJpIiwibGVuZ3RoIiwiYXBwbHkiLCJmdW5jIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJudW0iLCJpc05hTiIsImEiLCJwYXJzZUludCIsInByb3BOYW1lIiwiY29tcG9uZW50TmFtZSIsIkVycm9yIiwiZ2V0UHJlZml4IiwiYnJvd3NlclByZWZpeFRvS2V5IiwiYnJvd3NlclByZWZpeFRvU3R5bGUiLCJwcmVmaXhlcyIsInByb3AiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInByZWZpeCIsImtlYmFiVG9UaXRsZUNhc2UiLCJ0b0xvd2VyQ2FzZSIsInN0ciIsIm91dCIsInNob3VsZENhcGl0YWxpemUiLCJ0b1VwcGVyQ2FzZSIsImdldEJvdW5kUG9zaXRpb24iLCJzbmFwVG9HcmlkIiwiY2FuRHJhZ1giLCJjYW5EcmFnWSIsImdldENvbnRyb2xQb3NpdGlvbiIsImNyZWF0ZUNvcmVEYXRhIiwiY3JlYXRlRHJhZ2dhYmxlRGF0YSIsImNsb25lQm91bmRzIiwib3duZXJXaW5kb3ciLCJib3VuZE5vZGUiLCJxdWVyeVNlbGVjdG9yIiwibm9kZVN0eWxlIiwiYm91bmROb2RlU3R5bGUiLCJvZmZzZXRMZWZ0IiwibWFyZ2luTGVmdCIsIm9mZnNldFRvcCIsIm1hcmdpblRvcCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJncmlkIiwicGVuZGluZ1giLCJwZW5kaW5nWSIsInJvdW5kIiwidG91Y2hJZGVudGlmaWVyIiwiZHJhZ2dhYmxlQ29yZSIsInRvdWNoT2JqIiwiaXNTdGFydCIsImxhc3RYIiwibGFzdFkiLCJldmVudHNGb3IiLCJ0b3VjaCIsInN0YXJ0IiwibW92ZSIsInN0b3AiLCJtb3VzZSIsImRyYWdFdmVudEZvciIsIk5hTiIsImhhbmRsZURyYWdTdGFydCIsIm9uTW91c2VEb3duIiwiYWxsb3dBbnlDbGljayIsImJ1dHRvbiIsImRvbU5vZGUiLCJkaXNhYmxlZCIsInRhcmdldCIsIk5vZGUiLCJoYW5kbGUiLCJjYW5jZWwiLCJjb3JlRXZlbnQiLCJlbmFibGVVc2VyU2VsZWN0SGFjayIsImhhbmRsZURyYWciLCJoYW5kbGVEcmFnU3RvcCIsInR5cGUiLCJwcmV2ZW50RGVmYXVsdCIsIkFycmF5IiwiaXNBcnJheSIsIk1vdXNlRXZlbnQiLCJlcnIiLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50Iiwib25Nb3VzZVVwIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsImJvb2wiLCJwcm9jZXNzIiwiYnJvd3NlciIsIm5vZGVUeXBlIiwiYXJyYXlPZiIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7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QUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O21CQ2pMZDZPLEc7O0FBRHhCO0FBQ2UsVUFBU0EsR0FBVCxHQUEyQjtBQUFBOztBQUN4QyxPQUFJLElBQUosRUFBaUMscUJBQVFBLEdBQVI7QUFDbEMsRSIsImZpbGUiOiIuL2Rpc3QvcmVhY3QtZHJhZ2dhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3REcmFnZ2FibGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3REcmFnZ2FibGVcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIlJlYWN0RE9NXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxYWJhMzY5ZWIzMzg0NTY5MzM2MCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvRHJhZ2dhYmxlJykuZGVmYXVsdDtcclxubW9kdWxlLmV4cG9ydHMuRHJhZ2dhYmxlQ29yZSA9IHJlcXVpcmUoJy4vbGliL0RyYWdnYWJsZUNvcmUnKS5kZWZhdWx0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsIi8vIEBmbG93XHJcbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuLy8gJEZsb3dJZ25vcmVcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7Y3JlYXRlQ1NTVHJhbnNmb3JtLCBjcmVhdGVTVkdUcmFuc2Zvcm19IGZyb20gJy4vdXRpbHMvZG9tRm5zJztcclxuaW1wb3J0IHtjYW5EcmFnWCwgY2FuRHJhZ1ksIGNyZWF0ZURyYWdnYWJsZURhdGEsIGdldEJvdW5kUG9zaXRpb259IGZyb20gJy4vdXRpbHMvcG9zaXRpb25GbnMnO1xyXG5pbXBvcnQge2RvbnRTZXRNZX0gZnJvbSAnLi91dGlscy9zaGltcyc7XHJcbmltcG9ydCBEcmFnZ2FibGVDb3JlIGZyb20gJy4vRHJhZ2dhYmxlQ29yZSc7XHJcbmltcG9ydCBsb2cgZnJvbSAnLi91dGlscy9sb2cnO1xyXG5pbXBvcnQgdHlwZSB7RHJhZ2dhYmxlRXZlbnRIYW5kbGVyfSBmcm9tICcuL3V0aWxzL3R5cGVzJztcclxuXHJcbnR5cGUgRHJhZ2dhYmxlU3RhdGUgPSB7XHJcbiAgZHJhZ2dpbmc6IGJvb2xlYW4sXHJcbiAgZHJhZ2dlZDogYm9vbGVhbixcclxuICB4OiBudW1iZXIsIHk6IG51bWJlcixcclxuICBzbGFja1g6IG51bWJlciwgc2xhY2tZOiBudW1iZXIsXHJcbiAgaXNFbGVtZW50U1ZHOiBib29sZWFuXHJcbn07XHJcblxyXG50eXBlIENvbnN0cnVjdG9yUHJvcHMgPSB7XHJcbiAgcG9zaXRpb246IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSxcclxuICBkZWZhdWx0UG9zaXRpb246IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVxyXG59O1xyXG5cclxuLy9cclxuLy8gRGVmaW5lIDxEcmFnZ2FibGU+XHJcbi8vXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRHJhZ2dhYmxlJztcclxuXHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIC8vIEFjY2VwdHMgYWxsIHByb3BzIDxEcmFnZ2FibGVDb3JlPiBhY2NlcHRzLlxyXG4gICAgLi4uRHJhZ2dhYmxlQ29yZS5wcm9wVHlwZXMsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBgYXhpc2AgZGV0ZXJtaW5lcyB3aGljaCBheGlzIHRoZSBkcmFnZ2FibGUgY2FuIG1vdmUuXHJcbiAgICAgKlxyXG4gICAgICogIE5vdGUgdGhhdCBhbGwgY2FsbGJhY2tzIHdpbGwgc3RpbGwgcmV0dXJuIGRhdGEgYXMgbm9ybWFsLiBUaGlzIG9ubHlcclxuICAgICAqICBjb250cm9scyBmbHVzaGluZyB0byB0aGUgRE9NLlxyXG4gICAgICpcclxuICAgICAqICdib3RoJyBhbGxvd3MgbW92ZW1lbnQgaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5LlxyXG4gICAgICogJ3gnIGxpbWl0cyBtb3ZlbWVudCB0byBob3Jpem9udGFsIGF4aXMuXHJcbiAgICAgKiAneScgbGltaXRzIG1vdmVtZW50IHRvIHZlcnRpY2FsIGF4aXMuXHJcbiAgICAgKiAnbm9uZScgbGltaXRzIGFsbCBtb3ZlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBEZWZhdWx0cyB0byAnYm90aCcuXHJcbiAgICAgKi9cclxuICAgIGF4aXM6IFByb3BUeXBlcy5vbmVPZihbJ2JvdGgnLCAneCcsICd5JywgJ25vbmUnXSksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBgYm91bmRzYCBkZXRlcm1pbmVzIHRoZSByYW5nZSBvZiBtb3ZlbWVudCBhdmFpbGFibGUgdG8gdGhlIGVsZW1lbnQuXHJcbiAgICAgKiBBdmFpbGFibGUgdmFsdWVzIGFyZTpcclxuICAgICAqXHJcbiAgICAgKiAncGFyZW50JyByZXN0cmljdHMgbW92ZW1lbnQgd2l0aGluIHRoZSBEcmFnZ2FibGUncyBwYXJlbnQgbm9kZS5cclxuICAgICAqXHJcbiAgICAgKiBBbHRlcm5hdGl2ZWx5LCBwYXNzIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllcywgYWxsIG9mIHdoaWNoIGFyZSBvcHRpb25hbDpcclxuICAgICAqXHJcbiAgICAgKiB7bGVmdDogTEVGVF9CT1VORCwgcmlnaHQ6IFJJR0hUX0JPVU5ELCBib3R0b206IEJPVFRPTV9CT1VORCwgdG9wOiBUT1BfQk9VTkR9XHJcbiAgICAgKlxyXG4gICAgICogQWxsIHZhbHVlcyBhcmUgaW4gcHguXHJcbiAgICAgKlxyXG4gICAgICogRXhhbXBsZTpcclxuICAgICAqXHJcbiAgICAgKiBgYGBqc3hcclxuICAgICAqICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgICAqICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICogICAgICAgICByZXR1cm4gKFxyXG4gICAgICogICAgICAgICAgICA8RHJhZ2dhYmxlIGJvdW5kcz17e3JpZ2h0OiAzMDAsIGJvdHRvbTogMzAwfX0+XHJcbiAgICAgKiAgICAgICAgICAgICAgPGRpdj5Db250ZW50PC9kaXY+XHJcbiAgICAgKiAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgKiAgICAgICAgICk7XHJcbiAgICAgKiAgICAgICB9XHJcbiAgICAgKiAgIH0pO1xyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIGJvdW5kczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgbGVmdDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICByaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICB0b3A6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgYm90dG9tOiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICAgIH0pLFxyXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBQcm9wVHlwZXMub25lT2YoW2ZhbHNlXSlcclxuICAgIF0pLFxyXG5cclxuICAgIGRlZmF1bHRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmc6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGBkZWZhdWx0UG9zaXRpb25gIHNwZWNpZmllcyB0aGUgeCBhbmQgeSB0aGF0IHRoZSBkcmFnZ2VkIGl0ZW0gc2hvdWxkIHN0YXJ0IGF0XHJcbiAgICAgKlxyXG4gICAgICogRXhhbXBsZTpcclxuICAgICAqXHJcbiAgICAgKiBgYGBqc3hcclxuICAgICAqICAgICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgICAqICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICogICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUgZGVmYXVsdFBvc2l0aW9uPXt7eDogMjUsIHk6IDI1fX0+XHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pkkgc3RhcnQgd2l0aCB0cmFuc2Zvcm1YOiAyNXB4IGFuZCB0cmFuc2Zvcm1ZOiAyNXB4OzwvZGl2PlxyXG4gICAgICogICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAqICAgICAgICAgICAgICApO1xyXG4gICAgICogICAgICAgICAgfVxyXG4gICAgICogICAgICB9KTtcclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBkZWZhdWx0UG9zaXRpb246IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIHg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIHk6IFByb3BUeXBlcy5udW1iZXJcclxuICAgIH0pLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYHBvc2l0aW9uYCwgaWYgcHJlc2VudCwgZGVmaW5lcyB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiAgVGhpcyBpcyBzaW1pbGFyIHRvIGhvdyBmb3JtIGVsZW1lbnRzIGluIFJlYWN0IHdvcmsgLSBpZiBubyBgcG9zaXRpb25gIGlzIHN1cHBsaWVkLCB0aGUgY29tcG9uZW50XHJcbiAgICAgKiAgaXMgdW5jb250cm9sbGVkLlxyXG4gICAgICpcclxuICAgICAqIEV4YW1wbGU6XHJcbiAgICAgKlxyXG4gICAgICogYGBganN4XHJcbiAgICAgKiAgICAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICAgKiAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAqICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICogICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIHBvc2l0aW9uPXt7eDogMjUsIHk6IDI1fX0+XHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pkkgc3RhcnQgd2l0aCB0cmFuc2Zvcm1YOiAyNXB4IGFuZCB0cmFuc2Zvcm1ZOiAyNXB4OzwvZGl2PlxyXG4gICAgICogICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAqICAgICAgICAgICAgICApO1xyXG4gICAgICogICAgICAgICAgfVxyXG4gICAgICogICAgICB9KTtcclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgeDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgeTogUHJvcFR5cGVzLm51bWJlclxyXG4gICAgfSksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGVzZSBwcm9wZXJ0aWVzIHNob3VsZCBiZSBkZWZpbmVkIG9uIHRoZSBjaGlsZCwgbm90IGhlcmUuXHJcbiAgICAgKi9cclxuICAgIGNsYXNzTmFtZTogZG9udFNldE1lLFxyXG4gICAgc3R5bGU6IGRvbnRTZXRNZSxcclxuICAgIHRyYW5zZm9ybTogZG9udFNldE1lXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIC4uLkRyYWdnYWJsZUNvcmUuZGVmYXVsdFByb3BzLFxyXG4gICAgYXhpczogJ2JvdGgnLFxyXG4gICAgYm91bmRzOiBmYWxzZSxcclxuICAgIGRlZmF1bHRDbGFzc05hbWU6ICdyZWFjdC1kcmFnZ2FibGUnLFxyXG4gICAgZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nOiAncmVhY3QtZHJhZ2dhYmxlLWRyYWdnaW5nJyxcclxuICAgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkOiAncmVhY3QtZHJhZ2dhYmxlLWRyYWdnZWQnLFxyXG4gICAgZGVmYXVsdFBvc2l0aW9uOiB7eDogMCwgeTogMH0sXHJcbiAgICBwb3NpdGlvbjogbnVsbFxyXG4gIH07XHJcblxyXG4gIHN0YXRlOiBEcmFnZ2FibGVTdGF0ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IENvbnN0cnVjdG9yUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAvLyBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgY3VycmVudGx5IGRyYWdnaW5nLlxyXG4gICAgICBkcmFnZ2luZzogZmFsc2UsXHJcblxyXG4gICAgICAvLyBXaGV0aGVyIG9yIG5vdCB3ZSBoYXZlIGJlZW4gZHJhZ2dlZCBiZWZvcmUuXHJcbiAgICAgIGRyYWdnZWQ6IGZhbHNlLFxyXG5cclxuICAgICAgLy8gQ3VycmVudCB0cmFuc2Zvcm0geCBhbmQgeS5cclxuICAgICAgeDogcHJvcHMucG9zaXRpb24gPyBwcm9wcy5wb3NpdGlvbi54IDogcHJvcHMuZGVmYXVsdFBvc2l0aW9uLngsXHJcbiAgICAgIHk6IHByb3BzLnBvc2l0aW9uID8gcHJvcHMucG9zaXRpb24ueSA6IHByb3BzLmRlZmF1bHRQb3NpdGlvbi55LFxyXG5cclxuICAgICAgLy8gVXNlZCBmb3IgY29tcGVuc2F0aW5nIGZvciBvdXQtb2YtYm91bmRzIGRyYWdzXHJcbiAgICAgIHNsYWNrWDogMCwgc2xhY2tZOiAwLFxyXG5cclxuICAgICAgLy8gQ2FuIG9ubHkgZGV0ZXJtaW5lIGlmIFNWRyBhZnRlciBtb3VudGluZ1xyXG4gICAgICBpc0VsZW1lbnRTVkc6IGZhbHNlXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLnBvc2l0aW9uICYmICEodGhpcy5wcm9wcy5vbkRyYWcgfHwgdGhpcy5wcm9wcy5vblN0b3ApKSB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICBjb25zb2xlLndhcm4oJ0EgYHBvc2l0aW9uYCB3YXMgYXBwbGllZCB0byB0aGlzIDxEcmFnZ2FibGU+LCB3aXRob3V0IGRyYWcgaGFuZGxlcnMuIFRoaXMgd2lsbCBtYWtlIHRoaXMgJyArXHJcbiAgICAgICAgJ2NvbXBvbmVudCBlZmZlY3RpdmVseSB1bmRyYWdnYWJsZS4gUGxlYXNlIGF0dGFjaCBgb25EcmFnYCBvciBgb25TdG9wYCBoYW5kbGVycyBzbyB5b3UgY2FuIGFkanVzdCB0aGUgJyArXHJcbiAgICAgICAgJ2Bwb3NpdGlvbmAgb2YgdGhpcyBlbGVtZW50LicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlIGVsZW1lbnQgcGFzc2VkIGlzIGFuIGluc3RhbmNlb2YgU1ZHRWxlbWVudFxyXG4gICAgaWYodHlwZW9mIFNWR0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpIGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNFbGVtZW50U1ZHOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IE9iamVjdCkge1xyXG4gICAgLy8gU2V0IHgveSBpZiBwb3NpdGlvbiBoYXMgY2hhbmdlZFxyXG4gICAgaWYgKG5leHRQcm9wcy5wb3NpdGlvbiAmJlxyXG4gICAgICAgICghdGhpcy5wcm9wcy5wb3NpdGlvbiB8fFxyXG4gICAgICAgICAgbmV4dFByb3BzLnBvc2l0aW9uLnggIT09IHRoaXMucHJvcHMucG9zaXRpb24ueCB8fFxyXG4gICAgICAgICAgbmV4dFByb3BzLnBvc2l0aW9uLnkgIT09IHRoaXMucHJvcHMucG9zaXRpb24ueVxyXG4gICAgICAgIClcclxuICAgICAgKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB4OiBuZXh0UHJvcHMucG9zaXRpb24ueCwgeTogbmV4dFByb3BzLnBvc2l0aW9uLnkgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nOiBmYWxzZX0pOyAvLyBwcmV2ZW50cyBpbnZhcmlhbnQgaWYgdW5tb3VudGVkIHdoaWxlIGRyYWdnaW5nXHJcbiAgfVxyXG5cclxuICBvbkRyYWdTdGFydDogRHJhZ2dhYmxlRXZlbnRIYW5kbGVyID0gKGUsIGNvcmVEYXRhKSA9PiB7XHJcbiAgICBsb2coJ0RyYWdnYWJsZTogb25EcmFnU3RhcnQ6ICVqJywgY29yZURhdGEpO1xyXG5cclxuICAgIC8vIFNob3J0LWNpcmN1aXQgaWYgdXNlcidzIGNhbGxiYWNrIGtpbGxlZCBpdC5cclxuICAgIGNvbnN0IHNob3VsZFN0YXJ0ID0gdGhpcy5wcm9wcy5vblN0YXJ0KGUsIGNyZWF0ZURyYWdnYWJsZURhdGEodGhpcywgY29yZURhdGEpKTtcclxuICAgIC8vIEtpbGxzIHN0YXJ0IGV2ZW50IG9uIGNvcmUgYXMgd2VsbCwgc28gbW92ZSBoYW5kbGVycyBhcmUgbmV2ZXIgYm91bmQuXHJcbiAgICBpZiAoc2hvdWxkU3RhcnQgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ2dpbmc6IHRydWUsIGRyYWdnZWQ6IHRydWV9KTtcclxuICB9O1xyXG5cclxuICBvbkRyYWc6IERyYWdnYWJsZUV2ZW50SGFuZGxlciA9IChlLCBjb3JlRGF0YSkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmRyYWdnaW5nKSByZXR1cm4gZmFsc2U7XHJcbiAgICBsb2coJ0RyYWdnYWJsZTogb25EcmFnOiAlaicsIGNvcmVEYXRhKTtcclxuXHJcbiAgICBjb25zdCB1aURhdGEgPSBjcmVhdGVEcmFnZ2FibGVEYXRhKHRoaXMsIGNvcmVEYXRhKTtcclxuXHJcbiAgICBjb25zdCBuZXdTdGF0ZTogJFNoYXBlPERyYWdnYWJsZVN0YXRlPiA9IHtcclxuICAgICAgeDogdWlEYXRhLngsXHJcbiAgICAgIHk6IHVpRGF0YS55XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEtlZXAgd2l0aGluIGJvdW5kcy5cclxuICAgIGlmICh0aGlzLnByb3BzLmJvdW5kcykge1xyXG4gICAgICAvLyBTYXZlIG9yaWdpbmFsIHggYW5kIHkuXHJcbiAgICAgIGNvbnN0IHt4LCB5fSA9IG5ld1N0YXRlO1xyXG5cclxuICAgICAgLy8gQWRkIHNsYWNrIHRvIHRoZSB2YWx1ZXMgdXNlZCB0byBjYWxjdWxhdGUgYm91bmQgcG9zaXRpb24uIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCBpZlxyXG4gICAgICAvLyB3ZSBzdGFydCByZW1vdmluZyBzbGFjaywgdGhlIGVsZW1lbnQgd29uJ3QgcmVhY3QgdG8gaXQgcmlnaHQgYXdheSB1bnRpbCBpdCdzIGJlZW5cclxuICAgICAgLy8gY29tcGxldGVseSByZW1vdmVkLlxyXG4gICAgICBuZXdTdGF0ZS54ICs9IHRoaXMuc3RhdGUuc2xhY2tYO1xyXG4gICAgICBuZXdTdGF0ZS55ICs9IHRoaXMuc3RhdGUuc2xhY2tZO1xyXG5cclxuICAgICAgLy8gR2V0IGJvdW5kIHBvc2l0aW9uLiBUaGlzIHdpbGwgY2VpbC9mbG9vciB0aGUgeCBhbmQgeSB3aXRoaW4gdGhlIGJvdW5kYXJpZXMuXHJcbiAgICAgIC8vICRGbG93QnVnXHJcbiAgICAgIFtuZXdTdGF0ZS54LCBuZXdTdGF0ZS55XSA9IGdldEJvdW5kUG9zaXRpb24odGhpcywgbmV3U3RhdGUueCwgbmV3U3RhdGUueSk7XHJcblxyXG4gICAgICAvLyBSZWNhbGN1bGF0ZSBzbGFjayBieSBub3RpbmcgaG93IG11Y2ggd2FzIHNoYXZlZCBieSB0aGUgYm91bmRQb3NpdGlvbiBoYW5kbGVyLlxyXG4gICAgICBuZXdTdGF0ZS5zbGFja1ggPSB0aGlzLnN0YXRlLnNsYWNrWCArICh4IC0gbmV3U3RhdGUueCk7XHJcbiAgICAgIG5ld1N0YXRlLnNsYWNrWSA9IHRoaXMuc3RhdGUuc2xhY2tZICsgKHkgLSBuZXdTdGF0ZS55KTtcclxuXHJcbiAgICAgIC8vIFVwZGF0ZSB0aGUgZXZlbnQgd2UgZmlyZSB0byByZWZsZWN0IHdoYXQgcmVhbGx5IGhhcHBlbmVkIGFmdGVyIGJvdW5kcyB0b29rIGVmZmVjdC5cclxuICAgICAgdWlEYXRhLnggPSB4O1xyXG4gICAgICB1aURhdGEueSA9IHk7XHJcbiAgICAgIHVpRGF0YS5kZWx0YVggPSBuZXdTdGF0ZS54IC0gdGhpcy5zdGF0ZS54O1xyXG4gICAgICB1aURhdGEuZGVsdGFZID0gbmV3U3RhdGUueSAtIHRoaXMuc3RhdGUueTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaG9ydC1jaXJjdWl0IGlmIHVzZXIncyBjYWxsYmFjayBraWxsZWQgaXQuXHJcbiAgICBjb25zdCBzaG91bGRVcGRhdGUgPSB0aGlzLnByb3BzLm9uRHJhZyhlLCB1aURhdGEpO1xyXG4gICAgaWYgKHNob3VsZFVwZGF0ZSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcclxuICB9O1xyXG5cclxuICBvbkRyYWdTdG9wOiBEcmFnZ2FibGVFdmVudEhhbmRsZXIgPSAoZSwgY29yZURhdGEpID0+IHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5kcmFnZ2luZykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIC8vIFNob3J0LWNpcmN1aXQgaWYgdXNlcidzIGNhbGxiYWNrIGtpbGxlZCBpdC5cclxuICAgIGNvbnN0IHNob3VsZFN0b3AgPSB0aGlzLnByb3BzLm9uU3RvcChlLCBjcmVhdGVEcmFnZ2FibGVEYXRhKHRoaXMsIGNvcmVEYXRhKSk7XHJcbiAgICBpZiAoc2hvdWxkU3RvcCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBsb2coJ0RyYWdnYWJsZTogb25EcmFnU3RvcDogJWonLCBjb3JlRGF0YSk7XHJcblxyXG4gICAgY29uc3QgbmV3U3RhdGU6ICRTaGFwZTxEcmFnZ2FibGVTdGF0ZT4gPSB7XHJcbiAgICAgIGRyYWdnaW5nOiBmYWxzZSxcclxuICAgICAgc2xhY2tYOiAwLFxyXG4gICAgICBzbGFja1k6IDBcclxuICAgIH07XHJcblxyXG4gICAgLy8gSWYgdGhpcyBpcyBhIGNvbnRyb2xsZWQgY29tcG9uZW50LCB0aGUgcmVzdWx0IG9mIHRoaXMgb3BlcmF0aW9uIHdpbGwgYmUgdG9cclxuICAgIC8vIHJldmVydCBiYWNrIHRvIHRoZSBvbGQgcG9zaXRpb24uIFdlIGV4cGVjdCBhIGhhbmRsZXIgb24gYG9uRHJhZ1N0b3BgLCBhdCB0aGUgbGVhc3QuXHJcbiAgICBjb25zdCBjb250cm9sbGVkID0gQm9vbGVhbih0aGlzLnByb3BzLnBvc2l0aW9uKTtcclxuICAgIGlmIChjb250cm9sbGVkKSB7XHJcbiAgICAgIGNvbnN0IHt4LCB5fSA9IHRoaXMucHJvcHMucG9zaXRpb247XHJcbiAgICAgIG5ld1N0YXRlLnggPSB4O1xyXG4gICAgICBuZXdTdGF0ZS55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKTogUmVhY3QuRWxlbWVudDxhbnk+IHtcclxuICAgIGxldCBzdHlsZSA9IHt9LCBzdmdUcmFuc2Zvcm0gPSBudWxsO1xyXG5cclxuICAgIC8vIElmIHRoaXMgaXMgY29udHJvbGxlZCwgd2UgZG9uJ3Qgd2FudCB0byBtb3ZlIGl0IC0gdW5sZXNzIGl0J3MgZHJhZ2dpbmcuXHJcbiAgICBjb25zdCBjb250cm9sbGVkID0gQm9vbGVhbih0aGlzLnByb3BzLnBvc2l0aW9uKTtcclxuICAgIGNvbnN0IGRyYWdnYWJsZSA9ICFjb250cm9sbGVkIHx8IHRoaXMuc3RhdGUuZHJhZ2dpbmc7XHJcblxyXG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnByb3BzLnBvc2l0aW9uIHx8IHRoaXMucHJvcHMuZGVmYXVsdFBvc2l0aW9uO1xyXG4gICAgY29uc3QgdHJhbnNmb3JtT3B0cyA9IHtcclxuICAgICAgLy8gU2V0IGxlZnQgaWYgaG9yaXpvbnRhbCBkcmFnIGlzIGVuYWJsZWRcclxuICAgICAgeDogY2FuRHJhZ1godGhpcykgJiYgZHJhZ2dhYmxlID9cclxuICAgICAgICB0aGlzLnN0YXRlLnggOlxyXG4gICAgICAgIHBvc2l0aW9uLngsXHJcblxyXG4gICAgICAvLyBTZXQgdG9wIGlmIHZlcnRpY2FsIGRyYWcgaXMgZW5hYmxlZFxyXG4gICAgICB5OiBjYW5EcmFnWSh0aGlzKSAmJiBkcmFnZ2FibGUgP1xyXG4gICAgICAgIHRoaXMuc3RhdGUueSA6XHJcbiAgICAgICAgcG9zaXRpb24ueVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBJZiB0aGlzIGVsZW1lbnQgd2FzIFNWRywgd2UgdXNlIHRoZSBgdHJhbnNmb3JtYCBhdHRyaWJ1dGUuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0VsZW1lbnRTVkcpIHtcclxuICAgICAgc3ZnVHJhbnNmb3JtID0gY3JlYXRlU1ZHVHJhbnNmb3JtKHRyYW5zZm9ybU9wdHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQWRkIGEgQ1NTIHRyYW5zZm9ybSB0byBtb3ZlIHRoZSBlbGVtZW50IGFyb3VuZC4gVGhpcyBhbGxvd3MgdXMgdG8gbW92ZSB0aGUgZWxlbWVudCBhcm91bmRcclxuICAgICAgLy8gd2l0aG91dCB3b3JyeWluZyBhYm91dCB3aGV0aGVyIG9yIG5vdCBpdCBpcyByZWxhdGl2ZWx5IG9yIGFic29sdXRlbHkgcG9zaXRpb25lZC5cclxuICAgICAgLy8gSWYgdGhlIGl0ZW0geW91IGFyZSBkcmFnZ2luZyBhbHJlYWR5IGhhcyBhIHRyYW5zZm9ybSBzZXQsIHdyYXAgaXQgaW4gYSA8c3Bhbj4gc28gPERyYWdnYWJsZT5cclxuICAgICAgLy8gaGFzIGEgY2xlYW4gc2xhdGUuXHJcbiAgICAgIHN0eWxlID0gY3JlYXRlQ1NTVHJhbnNmb3JtKHRyYW5zZm9ybU9wdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgZGVmYXVsdENsYXNzTmFtZSxcclxuICAgICAgZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nLFxyXG4gICAgICBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgLy8gTWFyayB3aXRoIGNsYXNzIHdoaWxlIGRyYWdnaW5nXHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCh0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLmNsYXNzTmFtZSB8fCAnJyksIGRlZmF1bHRDbGFzc05hbWUsIHtcclxuICAgICAgW2RlZmF1bHRDbGFzc05hbWVEcmFnZ2luZ106IHRoaXMuc3RhdGUuZHJhZ2dpbmcsXHJcbiAgICAgIFtkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZF06IHRoaXMuc3RhdGUuZHJhZ2dlZFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUmV1c2UgdGhlIGNoaWxkIHByb3ZpZGVkXHJcbiAgICAvLyBUaGlzIG1ha2VzIGl0IGZsZXhpYmxlIHRvIHVzZSB3aGF0ZXZlciBlbGVtZW50IGlzIHdhbnRlZCAoZGl2LCB1bCwgZXRjKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPERyYWdnYWJsZUNvcmUgey4uLnRoaXMucHJvcHN9IG9uU3RhcnQ9e3RoaXMub25EcmFnU3RhcnR9IG9uRHJhZz17dGhpcy5vbkRyYWd9IG9uU3RvcD17dGhpcy5vbkRyYWdTdG9wfT5cclxuICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksIHtcclxuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxyXG4gICAgICAgICAgc3R5bGU6IHsuLi50aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLnN0eWxlLCAuLi5zdHlsZX0sXHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHN2Z1RyYW5zZm9ybVxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L0RyYWdnYWJsZUNvcmU+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvRHJhZ2dhYmxlLmVzNiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCIsXCJyb290XCI6XCJSZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzMlwiOlwicmVhY3QtZG9tXCIsXCJhbWRcIjpcInJlYWN0LWRvbVwiLFwicm9vdFwiOlwiUmVhY3RET01cIn1cbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBAZmxvd1xyXG5pbXBvcnQge2ZpbmRJbkFycmF5LCBpc0Z1bmN0aW9uLCBpbnR9IGZyb20gJy4vc2hpbXMnO1xyXG5pbXBvcnQgYnJvd3NlclByZWZpeCwge2dldFByZWZpeCwgYnJvd3NlclByZWZpeFRvU3R5bGUsIGJyb3dzZXJQcmVmaXhUb0tleX0gZnJvbSAnLi9nZXRQcmVmaXgnO1xyXG5cclxuaW1wb3J0IHR5cGUge0NvbnRyb2xQb3NpdGlvbn0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5sZXQgbWF0Y2hlc1NlbGVjdG9yRnVuYyA9ICcnO1xyXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKGVsOiBOb2RlLCBzZWxlY3Rvcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgaWYgKCFtYXRjaGVzU2VsZWN0b3JGdW5jKSB7XHJcbiAgICBtYXRjaGVzU2VsZWN0b3JGdW5jID0gZmluZEluQXJyYXkoW1xyXG4gICAgICAnbWF0Y2hlcycsXHJcbiAgICAgICd3ZWJraXRNYXRjaGVzU2VsZWN0b3InLFxyXG4gICAgICAnbW96TWF0Y2hlc1NlbGVjdG9yJyxcclxuICAgICAgJ21zTWF0Y2hlc1NlbGVjdG9yJyxcclxuICAgICAgJ29NYXRjaGVzU2VsZWN0b3InXHJcbiAgICBdLCBmdW5jdGlvbihtZXRob2Qpe1xyXG4gICAgICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXHJcbiAgICAgIHJldHVybiBpc0Z1bmN0aW9uKGVsW21ldGhvZF0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXHJcbiAgcmV0dXJuIGVsW21hdGNoZXNTZWxlY3RvckZ1bmNdLmNhbGwoZWwsIHNlbGVjdG9yKTtcclxufVxyXG5cclxuLy8gV29ya3MgdXAgdGhlIHRyZWUgdG8gdGhlIGRyYWdnYWJsZSBpdHNlbGYgYXR0ZW1wdGluZyB0byBtYXRjaCBzZWxlY3Rvci5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoZXNTZWxlY3RvckFuZFBhcmVudHNUbyhlbDogTm9kZSwgc2VsZWN0b3I6IHN0cmluZywgYmFzZU5vZGU6IE5vZGUpOiBib29sZWFuIHtcclxuICBsZXQgbm9kZSA9IGVsO1xyXG4gIGRvIHtcclxuICAgIGlmIChtYXRjaGVzU2VsZWN0b3Iobm9kZSwgc2VsZWN0b3IpKSByZXR1cm4gdHJ1ZTtcclxuICAgIGlmIChub2RlID09PSBiYXNlTm9kZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICB9IHdoaWxlIChub2RlKTtcclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnQoZWw6ID9Ob2RlLCBldmVudDogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gIGlmICghZWwpIHsgcmV0dXJuOyB9XHJcbiAgaWYgKGVsLmF0dGFjaEV2ZW50KSB7XHJcbiAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGhhbmRsZXIpO1xyXG4gIH0gZWxzZSBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgdHJ1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vICRGbG93SWdub3JlOiBEb2Vzbid0IHRoaW5rIGVsZW1lbnRzIGFyZSBpbmRleGFibGVcclxuICAgIGVsWydvbicgKyBldmVudF0gPSBoYW5kbGVyO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUV2ZW50KGVsOiA/Tm9kZSwgZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICBpZiAoIWVsKSB7IHJldHVybjsgfVxyXG4gIGlmIChlbC5kZXRhY2hFdmVudCkge1xyXG4gICAgZWwuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBoYW5kbGVyKTtcclxuICB9IGVsc2UgaWYgKGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcclxuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIHRydWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXHJcbiAgICBlbFsnb24nICsgZXZlbnRdID0gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvdXRlckhlaWdodChub2RlOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XHJcbiAgLy8gVGhpcyBpcyBkZWxpYmVyYXRlbHkgZXhjbHVkaW5nIG1hcmdpbiBmb3Igb3VyIGNhbGN1bGF0aW9ucywgc2luY2Ugd2UgYXJlIHVzaW5nXHJcbiAgLy8gb2Zmc2V0VG9wIHdoaWNoIGlzIGluY2x1ZGluZyBtYXJnaW4uIFNlZSBnZXRCb3VuZFBvc2l0aW9uXHJcbiAgbGV0IGhlaWdodCA9IG5vZGUuY2xpZW50SGVpZ2h0O1xyXG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcclxuICBoZWlnaHQgKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wV2lkdGgpO1xyXG4gIGhlaWdodCArPSBpbnQoY29tcHV0ZWRTdHlsZS5ib3JkZXJCb3R0b21XaWR0aCk7XHJcbiAgcmV0dXJuIGhlaWdodDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG91dGVyV2lkdGgobm9kZTogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xyXG4gIC8vIFRoaXMgaXMgZGVsaWJlcmF0ZWx5IGV4Y2x1ZGluZyBtYXJnaW4gZm9yIG91ciBjYWxjdWxhdGlvbnMsIHNpbmNlIHdlIGFyZSB1c2luZ1xyXG4gIC8vIG9mZnNldExlZnQgd2hpY2ggaXMgaW5jbHVkaW5nIG1hcmdpbi4gU2VlIGdldEJvdW5kUG9zaXRpb25cclxuICBsZXQgd2lkdGggPSBub2RlLmNsaWVudFdpZHRoO1xyXG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcclxuICB3aWR0aCArPSBpbnQoY29tcHV0ZWRTdHlsZS5ib3JkZXJMZWZ0V2lkdGgpO1xyXG4gIHdpZHRoICs9IGludChjb21wdXRlZFN0eWxlLmJvcmRlclJpZ2h0V2lkdGgpO1xyXG4gIHJldHVybiB3aWR0aDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaW5uZXJIZWlnaHQobm9kZTogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xyXG4gIGxldCBoZWlnaHQgPSBub2RlLmNsaWVudEhlaWdodDtcclxuICBjb25zdCBjb21wdXRlZFN0eWxlID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XHJcbiAgaGVpZ2h0IC09IGludChjb21wdXRlZFN0eWxlLnBhZGRpbmdUb3ApO1xyXG4gIGhlaWdodCAtPSBpbnQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nQm90dG9tKTtcclxuICByZXR1cm4gaGVpZ2h0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5uZXJXaWR0aChub2RlOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XHJcbiAgbGV0IHdpZHRoID0gbm9kZS5jbGllbnRXaWR0aDtcclxuICBjb25zdCBjb21wdXRlZFN0eWxlID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XHJcbiAgd2lkdGggLT0gaW50KGNvbXB1dGVkU3R5bGUucGFkZGluZ0xlZnQpO1xyXG4gIHdpZHRoIC09IGludChjb21wdXRlZFN0eWxlLnBhZGRpbmdSaWdodCk7XHJcbiAgcmV0dXJuIHdpZHRoO1xyXG59XHJcblxyXG4vLyBHZXQgZnJvbSBvZmZzZXRQYXJlbnRcclxuZXhwb3J0IGZ1bmN0aW9uIG9mZnNldFhZRnJvbVBhcmVudChldnQ6IHtjbGllbnRYOiBudW1iZXIsIGNsaWVudFk6IG51bWJlcn0sIG9mZnNldFBhcmVudDogSFRNTEVsZW1lbnQpOiBDb250cm9sUG9zaXRpb24ge1xyXG4gIGNvbnN0IGlzQm9keSA9IG9mZnNldFBhcmVudCA9PT0gb2Zmc2V0UGFyZW50Lm93bmVyRG9jdW1lbnQuYm9keTtcclxuICBjb25zdCBvZmZzZXRQYXJlbnRSZWN0ID0gaXNCb2R5ID8ge2xlZnQ6IDAsIHRvcDogMH0gOiBvZmZzZXRQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gIGNvbnN0IHggPSBldnQuY2xpZW50WCArIG9mZnNldFBhcmVudC5zY3JvbGxMZWZ0IC0gb2Zmc2V0UGFyZW50UmVjdC5sZWZ0O1xyXG4gIGNvbnN0IHkgPSBldnQuY2xpZW50WSArIG9mZnNldFBhcmVudC5zY3JvbGxUb3AgLSBvZmZzZXRQYXJlbnRSZWN0LnRvcDtcclxuXHJcbiAgcmV0dXJuIHt4LCB5fTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNTU1RyYW5zZm9ybSh7eCwgeX06IHt4OiBudW1iZXIsIHk6IG51bWJlcn0pOiBPYmplY3Qge1xyXG4gIC8vIFJlcGxhY2UgdW5pdGxlc3MgaXRlbXMgd2l0aCBweFxyXG4gIHJldHVybiB7W2Jyb3dzZXJQcmVmaXhUb0tleSgndHJhbnNmb3JtJywgYnJvd3NlclByZWZpeCldOiAndHJhbnNsYXRlM2QoJyArIHggKyAncHgsJyArIHkgKyAncHgsIDApJ307XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTVkdUcmFuc2Zvcm0oe3gsIHl9OiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9KTogc3RyaW5nIHtcclxuICByZXR1cm4gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywnICsgeSArICcsIDApJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvdWNoKGU6IE1vdXNlVG91Y2hFdmVudCwgaWRlbnRpZmllcjogbnVtYmVyKTogP3tjbGllbnRYOiBudW1iZXIsIGNsaWVudFk6IG51bWJlcn0ge1xyXG4gIHJldHVybiAoZS50YXJnZXRUb3VjaGVzICYmIGZpbmRJbkFycmF5KGUudGFyZ2V0VG91Y2hlcywgdCA9PiBpZGVudGlmaWVyID09PSB0LmlkZW50aWZpZXIpKSB8fFxyXG4gICAgICAgICAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBmaW5kSW5BcnJheShlLmNoYW5nZWRUb3VjaGVzLCB0ID0+IGlkZW50aWZpZXIgPT09IHQuaWRlbnRpZmllcikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG91Y2hJZGVudGlmaWVyKGU6IE1vdXNlVG91Y2hFdmVudCk6ID9udW1iZXIge1xyXG4gIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzWzBdKSByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdLmlkZW50aWZpZXI7XHJcbiAgaWYgKGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlc1swXSkgcmV0dXJuIGUuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllcjtcclxufVxyXG5cclxuLy8gVXNlci1zZWxlY3QgSGFja3M6XHJcbi8vXHJcbi8vIFVzZWZ1bCBmb3IgcHJldmVudGluZyBibHVlIGhpZ2hsaWdodHMgYWxsIG92ZXIgZXZlcnl0aGluZyB3aGVuIGRyYWdnaW5nLlxyXG5jb25zdCB1c2VyU2VsZWN0UHJlZml4ID0gZ2V0UHJlZml4KCd1c2VyLXNlbGVjdCcpO1xyXG5jb25zdCB1c2VyU2VsZWN0ID0gYnJvd3NlclByZWZpeFRvU3R5bGUoJ3VzZXItc2VsZWN0JywgdXNlclNlbGVjdFByZWZpeCk7XHJcbmNvbnN0IHVzZXJTZWxlY3RTdHlsZSA9IGA7JHt1c2VyU2VsZWN0fTogbm9uZTtgO1xyXG5jb25zdCB1c2VyU2VsZWN0UmVwbGFjZVJlZ0V4cCA9IG5ldyBSZWdFeHAoYDs/JHt1c2VyU2VsZWN0fTogbm9uZTtgKTsgLy8gbGVhZGluZyA7IG5vdCBwcmVzZW50IG9uIElFXHJcblxyXG4vLyBOb3RlIHdlJ3JlIHBhc3NpbmcgYGRvY3VtZW50YCBiL2Mgd2UgY291bGQgYmUgaWZyYW1lZFxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVXNlclNlbGVjdFN0eWxlcyhib2R5OiBIVE1MRWxlbWVudCkge1xyXG4gIGNvbnN0IHN0eWxlID0gYm9keS5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgfHwgJyc7XHJcbiAgYm9keS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc3R5bGUgKyB1c2VyU2VsZWN0U3R5bGUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVXNlclNlbGVjdFN0eWxlcyhib2R5OiBIVE1MRWxlbWVudCkge1xyXG4gIGNvbnN0IHN0eWxlID0gYm9keS5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgfHwgJyc7XHJcbiAgYm9keS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc3R5bGUucmVwbGFjZSh1c2VyU2VsZWN0UmVwbGFjZVJlZ0V4cCwgJycpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlSGFja3MoY2hpbGRTdHlsZTogT2JqZWN0ID0ge30pOiBPYmplY3Qge1xyXG4gIC8vIFdvcmthcm91bmQgSUUgcG9pbnRlciBldmVudHM7IHNlZSAjNTFcclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbXphYnJpc2tpZS9yZWFjdC1kcmFnZ2FibGUvaXNzdWVzLzUxI2lzc3VlY29tbWVudC0xMDM0ODgyNzhcclxuICByZXR1cm4ge1xyXG4gICAgdG91Y2hBY3Rpb246ICdub25lJyxcclxuICAgIC4uLmNoaWxkU3R5bGVcclxuICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi91dGlscy9kb21GbnMuZXM2IiwiLy8gQGZsb3dcclxuLy8gQGNyZWRpdHMgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcm9nb3pobmlrb2ZmL2E0M2NmZWQyN2M0MWU0ZTY4Y2RjXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW5BcnJheShhcnJheTogQXJyYXk8YW55PiB8IFRvdWNoTGlzdCwgY2FsbGJhY2s6IEZ1bmN0aW9uKTogYW55IHtcclxuICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChjYWxsYmFjay5hcHBseShjYWxsYmFjaywgW2FycmF5W2ldLCBpLCBhcnJheV0pKSByZXR1cm4gYXJyYXlbaV07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jOiBhbnkpOiBib29sZWFuIHtcclxuICByZXR1cm4gdHlwZW9mIGZ1bmMgPT09ICdmdW5jdGlvbicgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGZ1bmMpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOdW0obnVtOiBhbnkpOiBib29sZWFuIHtcclxuICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKG51bSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnQoYTogc3RyaW5nKTogbnVtYmVyIHtcclxuICByZXR1cm4gcGFyc2VJbnQoYSwgMTApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZG9udFNldE1lKHByb3BzOiBPYmplY3QsIHByb3BOYW1lOiBzdHJpbmcsIGNvbXBvbmVudE5hbWU6IHN0cmluZykge1xyXG4gIGlmIChwcm9wc1twcm9wTmFtZV0pIHtcclxuICAgIHJldHVybiBuZXcgRXJyb3IoYEludmFsaWQgcHJvcCAke3Byb3BOYW1lfSBwYXNzZWQgdG8gJHtjb21wb25lbnROYW1lfSAtIGRvIG5vdCBzZXQgdGhpcywgc2V0IGl0IG9uIHRoZSBjaGlsZC5gKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3V0aWxzL3NoaW1zLmVzNiIsIi8vIEBmbG93XHJcbmNvbnN0IHByZWZpeGVzID0gWydNb3onLCAnV2Via2l0JywgJ08nLCAnbXMnXTtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZWZpeChwcm9wOiBzdHJpbmc9J3RyYW5zZm9ybScpOiBzdHJpbmcge1xyXG4gIC8vIENoZWNraW5nIHNwZWNpZmljYWxseSBmb3IgJ3dpbmRvdy5kb2N1bWVudCcgaXMgZm9yIHBzZXVkby1icm93c2VyIHNlcnZlci1zaWRlXHJcbiAgLy8gZW52aXJvbm1lbnRzIHRoYXQgZGVmaW5lICd3aW5kb3cnIGFzIHRoZSBnbG9iYWwgY29udGV4dC5cclxuICAvLyBFLmcuIFJlYWN0LXJhaWxzIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtcmFpbHMvcHVsbC84NClcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAnJztcclxuXHJcbiAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xyXG5cclxuICBpZiAocHJvcCBpbiBzdHlsZSkgcmV0dXJuICcnO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoYnJvd3NlclByZWZpeFRvS2V5KHByb3AsIHByZWZpeGVzW2ldKSBpbiBzdHlsZSkgcmV0dXJuIHByZWZpeGVzW2ldO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICcnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnJvd3NlclByZWZpeFRvS2V5KHByb3A6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiBwcmVmaXggPyBgJHtwcmVmaXh9JHtrZWJhYlRvVGl0bGVDYXNlKHByb3ApfWAgOiBwcm9wO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnJvd3NlclByZWZpeFRvU3R5bGUocHJvcDogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHByZWZpeCA/IGAtJHtwcmVmaXgudG9Mb3dlckNhc2UoKX0tJHtwcm9wfWAgOiBwcm9wO1xyXG59XHJcblxyXG5mdW5jdGlvbiBrZWJhYlRvVGl0bGVDYXNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICBsZXQgb3V0ID0gJyc7XHJcbiAgbGV0IHNob3VsZENhcGl0YWxpemUgPSB0cnVlO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc2hvdWxkQ2FwaXRhbGl6ZSkge1xyXG4gICAgICBvdXQgKz0gc3RyW2ldLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIHNob3VsZENhcGl0YWxpemUgPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnLScpIHtcclxuICAgICAgc2hvdWxkQ2FwaXRhbGl6ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvdXQgKz0gc3RyW2ldO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gb3V0O1xyXG59XHJcblxyXG4vLyBEZWZhdWx0IGV4cG9ydCBpcyB0aGUgcHJlZml4IGl0c2VsZiwgbGlrZSAnTW96JywgJ1dlYmtpdCcsIGV0Y1xyXG4vLyBOb3RlIHRoYXQgeW91IG1heSBoYXZlIHRvIHJlLXRlc3QgZm9yIGNlcnRhaW4gdGhpbmdzOyBmb3IgaW5zdGFuY2UsIENocm9tZSA1MFxyXG4vLyBjYW4gaGFuZGxlIHVucHJlZml4ZWQgYHRyYW5zZm9ybWAsIGJ1dCBub3QgdW5wcmVmaXhlZCBgdXNlci1zZWxlY3RgXHJcbmV4cG9ydCBkZWZhdWx0IGdldFByZWZpeCgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdXRpbHMvZ2V0UHJlZml4LmVzNiIsIi8vIEBmbG93XHJcbmltcG9ydCB7aXNOdW0sIGludH0gZnJvbSAnLi9zaGltcyc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQge2dldFRvdWNoLCBpbm5lcldpZHRoLCBpbm5lckhlaWdodCwgb2Zmc2V0WFlGcm9tUGFyZW50LCBvdXRlcldpZHRoLCBvdXRlckhlaWdodH0gZnJvbSAnLi9kb21GbnMnO1xyXG5cclxuaW1wb3J0IHR5cGUgRHJhZ2dhYmxlIGZyb20gJy4uL0RyYWdnYWJsZSc7XHJcbmltcG9ydCB0eXBlIHtCb3VuZHMsIENvbnRyb2xQb3NpdGlvbiwgRHJhZ2dhYmxlRGF0YX0gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCB0eXBlIERyYWdnYWJsZUNvcmUgZnJvbSAnLi4vRHJhZ2dhYmxlQ29yZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm91bmRQb3NpdGlvbihkcmFnZ2FibGU6IERyYWdnYWJsZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAvLyBJZiBubyBib3VuZHMsIHNob3J0LWNpcmN1aXQgYW5kIG1vdmUgb25cclxuICBpZiAoIWRyYWdnYWJsZS5wcm9wcy5ib3VuZHMpIHJldHVybiBbeCwgeV07XHJcblxyXG4gIC8vIENsb25lIG5ldyBib3VuZHNcclxuICBsZXQge2JvdW5kc30gPSBkcmFnZ2FibGUucHJvcHM7XHJcbiAgYm91bmRzID0gdHlwZW9mIGJvdW5kcyA9PT0gJ3N0cmluZycgPyBib3VuZHMgOiBjbG9uZUJvdW5kcyhib3VuZHMpO1xyXG4gIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShkcmFnZ2FibGUpO1xyXG5cclxuICBpZiAodHlwZW9mIGJvdW5kcyA9PT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnN0IHtvd25lckRvY3VtZW50fSA9IG5vZGU7XHJcbiAgICBjb25zdCBvd25lcldpbmRvdyA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICBsZXQgYm91bmROb2RlO1xyXG4gICAgaWYgKGJvdW5kcyA9PT0gJ3BhcmVudCcpIHtcclxuICAgICAgYm91bmROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm91bmROb2RlID0gb3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJvdW5kcyk7XHJcbiAgICAgIGlmICghYm91bmROb2RlKSB0aHJvdyBuZXcgRXJyb3IoJ0JvdW5kcyBzZWxlY3RvciBcIicgKyBib3VuZHMgKyAnXCIgY291bGQgbm90IGZpbmQgYW4gZWxlbWVudC4nKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG5vZGVTdHlsZSA9IG93bmVyV2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XHJcbiAgICBjb25zdCBib3VuZE5vZGVTdHlsZSA9IG93bmVyV2luZG93LmdldENvbXB1dGVkU3R5bGUoYm91bmROb2RlKTtcclxuICAgIC8vIENvbXB1dGUgYm91bmRzLiBUaGlzIGlzIGEgcGFpbiB3aXRoIHBhZGRpbmcgYW5kIG9mZnNldHMgYnV0IHRoaXMgZ2V0cyBpdCBleGFjdGx5IHJpZ2h0LlxyXG4gICAgYm91bmRzID0ge1xyXG4gICAgICBsZWZ0OiAtbm9kZS5vZmZzZXRMZWZ0ICsgaW50KGJvdW5kTm9kZVN0eWxlLnBhZGRpbmdMZWZ0KSArXHJcbiAgICAgICAgICAgIGludChub2RlU3R5bGUuYm9yZGVyTGVmdFdpZHRoKSArIGludChub2RlU3R5bGUubWFyZ2luTGVmdCksXHJcbiAgICAgIHRvcDogLW5vZGUub2Zmc2V0VG9wICsgaW50KGJvdW5kTm9kZVN0eWxlLnBhZGRpbmdUb3ApICtcclxuICAgICAgICAgICAgaW50KG5vZGVTdHlsZS5ib3JkZXJUb3BXaWR0aCkgKyBpbnQobm9kZVN0eWxlLm1hcmdpblRvcCksXHJcbiAgICAgIHJpZ2h0OiBpbm5lcldpZHRoKGJvdW5kTm9kZSkgLSBvdXRlcldpZHRoKG5vZGUpIC0gbm9kZS5vZmZzZXRMZWZ0LFxyXG4gICAgICBib3R0b206IGlubmVySGVpZ2h0KGJvdW5kTm9kZSkgLSBvdXRlckhlaWdodChub2RlKSAtIG5vZGUub2Zmc2V0VG9wXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gS2VlcCB4IGFuZCB5IGJlbG93IHJpZ2h0IGFuZCBib3R0b20gbGltaXRzLi4uXHJcbiAgaWYgKGlzTnVtKGJvdW5kcy5yaWdodCkpIHggPSBNYXRoLm1pbih4LCBib3VuZHMucmlnaHQpO1xyXG4gIGlmIChpc051bShib3VuZHMuYm90dG9tKSkgeSA9IE1hdGgubWluKHksIGJvdW5kcy5ib3R0b20pO1xyXG5cclxuICAvLyBCdXQgYWJvdmUgbGVmdCBhbmQgdG9wIGxpbWl0cy5cclxuICBpZiAoaXNOdW0oYm91bmRzLmxlZnQpKSB4ID0gTWF0aC5tYXgoeCwgYm91bmRzLmxlZnQpO1xyXG4gIGlmIChpc051bShib3VuZHMudG9wKSkgeSA9IE1hdGgubWF4KHksIGJvdW5kcy50b3ApO1xyXG5cclxuICByZXR1cm4gW3gsIHldO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc25hcFRvR3JpZChncmlkOiBbbnVtYmVyLCBudW1iZXJdLCBwZW5kaW5nWDogbnVtYmVyLCBwZW5kaW5nWTogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB7XHJcbiAgY29uc3QgeCA9IE1hdGgucm91bmQocGVuZGluZ1ggLyBncmlkWzBdKSAqIGdyaWRbMF07XHJcbiAgY29uc3QgeSA9IE1hdGgucm91bmQocGVuZGluZ1kgLyBncmlkWzFdKSAqIGdyaWRbMV07XHJcbiAgcmV0dXJuIFt4LCB5XTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbkRyYWdYKGRyYWdnYWJsZTogRHJhZ2dhYmxlKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIGRyYWdnYWJsZS5wcm9wcy5heGlzID09PSAnYm90aCcgfHwgZHJhZ2dhYmxlLnByb3BzLmF4aXMgPT09ICd4JztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbkRyYWdZKGRyYWdnYWJsZTogRHJhZ2dhYmxlKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIGRyYWdnYWJsZS5wcm9wcy5heGlzID09PSAnYm90aCcgfHwgZHJhZ2dhYmxlLnByb3BzLmF4aXMgPT09ICd5JztcclxufVxyXG5cclxuLy8gR2V0IHt4LCB5fSBwb3NpdGlvbnMgZnJvbSBldmVudC5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyb2xQb3NpdGlvbihlOiBNb3VzZVRvdWNoRXZlbnQsIHRvdWNoSWRlbnRpZmllcjogP251bWJlciwgZHJhZ2dhYmxlQ29yZTogRHJhZ2dhYmxlQ29yZSk6ID9Db250cm9sUG9zaXRpb24ge1xyXG4gIGNvbnN0IHRvdWNoT2JqID0gdHlwZW9mIHRvdWNoSWRlbnRpZmllciA9PT0gJ251bWJlcicgPyBnZXRUb3VjaChlLCB0b3VjaElkZW50aWZpZXIpIDogbnVsbDtcclxuICBpZiAodHlwZW9mIHRvdWNoSWRlbnRpZmllciA9PT0gJ251bWJlcicgJiYgIXRvdWNoT2JqKSByZXR1cm4gbnVsbDsgLy8gbm90IHRoZSByaWdodCB0b3VjaFxyXG4gIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShkcmFnZ2FibGVDb3JlKTtcclxuICAvLyBVc2VyIGNhbiBwcm92aWRlIGFuIG9mZnNldFBhcmVudCBpZiBkZXNpcmVkLlxyXG4gIGNvbnN0IG9mZnNldFBhcmVudCA9IGRyYWdnYWJsZUNvcmUucHJvcHMub2Zmc2V0UGFyZW50IHx8IG5vZGUub2Zmc2V0UGFyZW50IHx8IG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xyXG4gIHJldHVybiBvZmZzZXRYWUZyb21QYXJlbnQodG91Y2hPYmogfHwgZSwgb2Zmc2V0UGFyZW50KTtcclxufVxyXG5cclxuLy8gQ3JlYXRlIGFuIGRhdGEgb2JqZWN0IGV4cG9zZWQgYnkgPERyYWdnYWJsZUNvcmU+J3MgZXZlbnRzXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb3JlRGF0YShkcmFnZ2FibGU6IERyYWdnYWJsZUNvcmUsIHg6IG51bWJlciwgeTogbnVtYmVyKTogRHJhZ2dhYmxlRGF0YSB7XHJcbiAgY29uc3Qgc3RhdGUgPSBkcmFnZ2FibGUuc3RhdGU7XHJcbiAgY29uc3QgaXNTdGFydCA9ICFpc051bShzdGF0ZS5sYXN0WCk7XHJcblxyXG4gIGlmIChpc1N0YXJ0KSB7XHJcbiAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBtb3ZlLCB1c2UgdGhlIHggYW5kIHkgYXMgbGFzdCBjb29yZHMuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub2RlOiBSZWFjdERPTS5maW5kRE9NTm9kZShkcmFnZ2FibGUpLFxyXG4gICAgICBkZWx0YVg6IDAsIGRlbHRhWTogMCxcclxuICAgICAgbGFzdFg6IHgsIGxhc3RZOiB5LFxyXG4gICAgICB4OiB4LCB5OiB5XHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBPdGhlcndpc2UgY2FsY3VsYXRlIHByb3BlciB2YWx1ZXMuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub2RlOiBSZWFjdERPTS5maW5kRE9NTm9kZShkcmFnZ2FibGUpLFxyXG4gICAgICBkZWx0YVg6IHggLSBzdGF0ZS5sYXN0WCwgZGVsdGFZOiB5IC0gc3RhdGUubGFzdFksXHJcbiAgICAgIGxhc3RYOiBzdGF0ZS5sYXN0WCwgbGFzdFk6IHN0YXRlLmxhc3RZLFxyXG4gICAgICB4OiB4LCB5OiB5XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ3JlYXRlIGFuIGRhdGEgZXhwb3NlZCBieSA8RHJhZ2dhYmxlPidzIGV2ZW50c1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRHJhZ2dhYmxlRGF0YShkcmFnZ2FibGU6IERyYWdnYWJsZSwgY29yZURhdGE6IERyYWdnYWJsZURhdGEpOiBEcmFnZ2FibGVEYXRhIHtcclxuICByZXR1cm4ge1xyXG4gICAgbm9kZTogY29yZURhdGEubm9kZSxcclxuICAgIHg6IGRyYWdnYWJsZS5zdGF0ZS54ICsgY29yZURhdGEuZGVsdGFYLFxyXG4gICAgeTogZHJhZ2dhYmxlLnN0YXRlLnkgKyBjb3JlRGF0YS5kZWx0YVksXHJcbiAgICBkZWx0YVg6IGNvcmVEYXRhLmRlbHRhWCxcclxuICAgIGRlbHRhWTogY29yZURhdGEuZGVsdGFZLFxyXG4gICAgbGFzdFg6IGRyYWdnYWJsZS5zdGF0ZS54LFxyXG4gICAgbGFzdFk6IGRyYWdnYWJsZS5zdGF0ZS55XHJcbiAgfTtcclxufVxyXG5cclxuLy8gQSBsb3QgZmFzdGVyIHRoYW4gc3RyaW5naWZ5L3BhcnNlXHJcbmZ1bmN0aW9uIGNsb25lQm91bmRzKGJvdW5kczogQm91bmRzKTogQm91bmRzIHtcclxuICByZXR1cm4ge1xyXG4gICAgbGVmdDogYm91bmRzLmxlZnQsXHJcbiAgICB0b3A6IGJvdW5kcy50b3AsXHJcbiAgICByaWdodDogYm91bmRzLnJpZ2h0LFxyXG4gICAgYm90dG9tOiBib3VuZHMuYm90dG9tXHJcbiAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdXRpbHMvcG9zaXRpb25GbnMuZXM2IiwiLy8gQGZsb3dcclxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQge21hdGNoZXNTZWxlY3RvckFuZFBhcmVudHNUbywgYWRkRXZlbnQsIHJlbW92ZUV2ZW50LCBhZGRVc2VyU2VsZWN0U3R5bGVzLCBnZXRUb3VjaElkZW50aWZpZXIsXHJcbiAgICAgICAgcmVtb3ZlVXNlclNlbGVjdFN0eWxlcywgc3R5bGVIYWNrc30gZnJvbSAnLi91dGlscy9kb21GbnMnO1xyXG5pbXBvcnQge2NyZWF0ZUNvcmVEYXRhLCBnZXRDb250cm9sUG9zaXRpb24sIHNuYXBUb0dyaWR9IGZyb20gJy4vdXRpbHMvcG9zaXRpb25GbnMnO1xyXG5pbXBvcnQge2RvbnRTZXRNZX0gZnJvbSAnLi91dGlscy9zaGltcyc7XHJcbmltcG9ydCBsb2cgZnJvbSAnLi91dGlscy9sb2cnO1xyXG5cclxuaW1wb3J0IHR5cGUge0V2ZW50SGFuZGxlcn0gZnJvbSAnLi91dGlscy90eXBlcyc7XHJcblxyXG4vLyBTaW1wbGUgYWJzdHJhY3Rpb24gZm9yIGRyYWdnaW5nIGV2ZW50cyBuYW1lcy5cclxuY29uc3QgZXZlbnRzRm9yID0ge1xyXG4gIHRvdWNoOiB7XHJcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxyXG4gICAgbW92ZTogJ3RvdWNobW92ZScsXHJcbiAgICBzdG9wOiAndG91Y2hlbmQnXHJcbiAgfSxcclxuICBtb3VzZToge1xyXG4gICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxyXG4gICAgbW92ZTogJ21vdXNlbW92ZScsXHJcbiAgICBzdG9wOiAnbW91c2V1cCdcclxuICB9XHJcbn07XHJcblxyXG4vLyBEZWZhdWx0IHRvIG1vdXNlIGV2ZW50cy5cclxubGV0IGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci5tb3VzZTtcclxuXHJcbnR5cGUgQ29yZVN0YXRlID0ge1xyXG4gIGRyYWdnaW5nOiBib29sZWFuLFxyXG4gIGxhc3RYOiBudW1iZXIsXHJcbiAgbGFzdFk6IG51bWJlcixcclxuICB0b3VjaElkZW50aWZpZXI6ID9udW1iZXJcclxufTtcclxuXHJcbi8vXHJcbi8vIERlZmluZSA8RHJhZ2dhYmxlQ29yZT4uXHJcbi8vXHJcbi8vIDxEcmFnZ2FibGVDb3JlPiBpcyBmb3IgYWR2YW5jZWQgdXNhZ2Ugb2YgPERyYWdnYWJsZT4uIEl0IG1haW50YWlucyBtaW5pbWFsIGludGVybmFsIHN0YXRlIHNvIGl0IGNhblxyXG4vLyB3b3JrIHdlbGwgd2l0aCBsaWJyYXJpZXMgdGhhdCByZXF1aXJlIG1vcmUgY29udHJvbCBvdmVyIHRoZSBlbGVtZW50LlxyXG4vL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlQ29yZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdEcmFnZ2FibGVDb3JlJztcclxuXHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogYGFsbG93QW55Q2xpY2tgIGFsbG93cyBkcmFnZ2luZyB1c2luZyBhbnkgbW91c2UgYnV0dG9uLlxyXG4gICAgICogQnkgZGVmYXVsdCwgd2Ugb25seSBhY2NlcHQgdGhlIGxlZnQgYnV0dG9uLlxyXG4gICAgICpcclxuICAgICAqIERlZmF1bHRzIHRvIGBmYWxzZWAuXHJcbiAgICAgKi9cclxuICAgIGFsbG93QW55Q2xpY2s6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYGRpc2FibGVkYCwgaWYgdHJ1ZSwgc3RvcHMgdGhlIDxEcmFnZ2FibGU+IGZyb20gZHJhZ2dpbmcuIEFsbCBoYW5kbGVycyxcclxuICAgICAqIHdpdGggdGhlIGV4Y2VwdGlvbiBvZiBgb25Nb3VzZURvd25gLCB3aWxsIG5vdCBmaXJlLlxyXG4gICAgICovXHJcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCeSBkZWZhdWx0LCB3ZSBhZGQgJ3VzZXItc2VsZWN0Om5vbmUnIGF0dHJpYnV0ZXMgdG8gdGhlIGRvY3VtZW50IGJvZHlcclxuICAgICAqIHRvIHByZXZlbnQgdWdseSB0ZXh0IHNlbGVjdGlvbiBkdXJpbmcgZHJhZy4gSWYgdGhpcyBpcyBjYXVzaW5nIHByb2JsZW1zXHJcbiAgICAgKiBmb3IgeW91ciBhcHAsIHNldCB0aGlzIHRvIGBmYWxzZWAuXHJcbiAgICAgKi9cclxuICAgIGVuYWJsZVVzZXJTZWxlY3RIYWNrOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGBvZmZzZXRQYXJlbnRgLCBpZiBzZXQsIHVzZXMgdGhlIHBhc3NlZCBET00gbm9kZSB0byBjb21wdXRlIGRyYWcgb2Zmc2V0c1xyXG4gICAgICogaW5zdGVhZCBvZiB1c2luZyB0aGUgcGFyZW50IG5vZGUuXHJcbiAgICAgKi9cclxuICAgIG9mZnNldFBhcmVudDogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIgJiYgcHJvcHNbcHJvcE5hbWVdICYmIHByb3BzW3Byb3BOYW1lXS5ub2RlVHlwZSAhPT0gMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRHJhZ2dhYmxlXFwncyBvZmZzZXRQYXJlbnQgbXVzdCBiZSBhIERPTSBOb2RlLicpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYGdyaWRgIHNwZWNpZmllcyB0aGUgeCBhbmQgeSB0aGF0IGRyYWdnaW5nIHNob3VsZCBzbmFwIHRvLlxyXG4gICAgICovXHJcbiAgICBncmlkOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGBoYW5kbGVgIHNwZWNpZmllcyBhIHNlbGVjdG9yIHRvIGJlIHVzZWQgYXMgdGhlIGhhbmRsZSB0aGF0IGluaXRpYXRlcyBkcmFnLlxyXG4gICAgICpcclxuICAgICAqIEV4YW1wbGU6XHJcbiAgICAgKlxyXG4gICAgICogYGBganN4XHJcbiAgICAgKiAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICAgKiAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAqICAgICAgICAgcmV0dXJuIChcclxuICAgICAqICAgICAgICAgICAgPERyYWdnYWJsZSBoYW5kbGU9XCIuaGFuZGxlXCI+XHJcbiAgICAgKiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAqICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW5kbGVcIj5DbGljayBtZSB0byBkcmFnPC9kaXY+XHJcbiAgICAgKiAgICAgICAgICAgICAgICAgIDxkaXY+VGhpcyBpcyBzb21lIG90aGVyIGNvbnRlbnQ8L2Rpdj5cclxuICAgICAqICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAqICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAqICAgICAgICAgKTtcclxuICAgICAqICAgICAgIH1cclxuICAgICAqICAgfSk7XHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgaGFuZGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYGNhbmNlbGAgc3BlY2lmaWVzIGEgc2VsZWN0b3IgdG8gYmUgdXNlZCB0byBwcmV2ZW50IGRyYWcgaW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogRXhhbXBsZTpcclxuICAgICAqXHJcbiAgICAgKiBgYGBqc3hcclxuICAgICAqICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgICAqICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICogICAgICAgICAgIHJldHVybihcclxuICAgICAqICAgICAgICAgICAgICAgPERyYWdnYWJsZSBjYW5jZWw9XCIuY2FuY2VsXCI+XHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbFwiPllvdSBjYW4ndCBkcmFnIGZyb20gaGVyZTwvZGl2PlxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICA8ZGl2PkRyYWdnaW5nIGhlcmUgd29ya3MgZmluZTwvZGl2PlxyXG4gICAgICogICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgKiAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICogICAgICAgICAgICk7XHJcbiAgICAgKiAgICAgICB9XHJcbiAgICAgKiAgIH0pO1xyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIGNhbmNlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIGRyYWdnaW5nIHN0YXJ0cy5cclxuICAgICAqIElmIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgYm9vbGVhbiBmYWxzZSwgZHJhZ2dpbmcgd2lsbCBiZSBjYW5jZWxlZC5cclxuICAgICAqL1xyXG4gICAgb25TdGFydDogUHJvcFR5cGVzLmZ1bmMsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hpbGUgZHJhZ2dpbmcuXHJcbiAgICAgKiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGJvb2xlYW4gZmFsc2UsIGRyYWdnaW5nIHdpbGwgYmUgY2FuY2VsZWQuXHJcbiAgICAgKi9cclxuICAgIG9uRHJhZzogUHJvcFR5cGVzLmZ1bmMsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiBkcmFnZ2luZyBzdG9wcy5cclxuICAgICAqIElmIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgYm9vbGVhbiBmYWxzZSwgdGhlIGRyYWcgd2lsbCByZW1haW4gYWN0aXZlLlxyXG4gICAgICovXHJcbiAgICBvblN0b3A6IFByb3BUeXBlcy5mdW5jLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSB3b3JrYXJvdW5kIG9wdGlvbiB3aGljaCBjYW4gYmUgcGFzc2VkIGlmIG9uTW91c2VEb3duIG5lZWRzIHRvIGJlIGFjY2Vzc2VkLFxyXG4gICAgICogc2luY2UgaXQnbGwgYWx3YXlzIGJlIGJsb2NrZWQgKGFzIHRoZXJlIGlzIGludGVybmFsIHVzZSBvZiBvbk1vdXNlRG93bilcclxuICAgICAqL1xyXG4gICAgb25Nb3VzZURvd246IFByb3BUeXBlcy5mdW5jLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlc2UgcHJvcGVydGllcyBzaG91bGQgYmUgZGVmaW5lZCBvbiB0aGUgY2hpbGQsIG5vdCBoZXJlLlxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU6IGRvbnRTZXRNZSxcclxuICAgIHN0eWxlOiBkb250U2V0TWUsXHJcbiAgICB0cmFuc2Zvcm06IGRvbnRTZXRNZVxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBhbGxvd0FueUNsaWNrOiBmYWxzZSwgLy8gYnkgZGVmYXVsdCBvbmx5IGFjY2VwdCBsZWZ0IGNsaWNrXHJcbiAgICBjYW5jZWw6IG51bGwsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBlbmFibGVVc2VyU2VsZWN0SGFjazogdHJ1ZSxcclxuICAgIG9mZnNldFBhcmVudDogbnVsbCxcclxuICAgIGhhbmRsZTogbnVsbCxcclxuICAgIGdyaWQ6IG51bGwsXHJcbiAgICB0cmFuc2Zvcm06IG51bGwsXHJcbiAgICBvblN0YXJ0OiBmdW5jdGlvbigpe30sXHJcbiAgICBvbkRyYWc6IGZ1bmN0aW9uKCl7fSxcclxuICAgIG9uU3RvcDogZnVuY3Rpb24oKXt9LFxyXG4gICAgb25Nb3VzZURvd246IGZ1bmN0aW9uKCl7fVxyXG4gIH07XHJcblxyXG4gIHN0YXRlOiBDb3JlU3RhdGUgPSB7XHJcbiAgICBkcmFnZ2luZzogZmFsc2UsXHJcbiAgICAvLyBVc2VkIHdoaWxlIGRyYWdnaW5nIHRvIGRldGVybWluZSBkZWx0YXMuXHJcbiAgICBsYXN0WDogTmFOLCBsYXN0WTogTmFOLFxyXG4gICAgdG91Y2hJZGVudGlmaWVyOiBudWxsXHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAvLyBSZW1vdmUgYW55IGxlZnRvdmVyIGV2ZW50IGhhbmRsZXJzLiBSZW1vdmUgYm90aCB0b3VjaCBhbmQgbW91c2UgaGFuZGxlcnMgaW4gY2FzZVxyXG4gICAgLy8gc29tZSBicm93c2VyIHF1aXJrIGNhdXNlZCBhIHRvdWNoIGV2ZW50IHRvIGZpcmUgZHVyaW5nIGEgbW91c2UgbW92ZSwgb3IgdmljZSB2ZXJzYS5cclxuICAgIGNvbnN0IHtvd25lckRvY3VtZW50fSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgcmVtb3ZlRXZlbnQob3duZXJEb2N1bWVudCwgZXZlbnRzRm9yLm1vdXNlLm1vdmUsIHRoaXMuaGFuZGxlRHJhZyk7XHJcbiAgICByZW1vdmVFdmVudChvd25lckRvY3VtZW50LCBldmVudHNGb3IudG91Y2gubW92ZSwgdGhpcy5oYW5kbGVEcmFnKTtcclxuICAgIHJlbW92ZUV2ZW50KG93bmVyRG9jdW1lbnQsIGV2ZW50c0Zvci5tb3VzZS5zdG9wLCB0aGlzLmhhbmRsZURyYWdTdG9wKTtcclxuICAgIHJlbW92ZUV2ZW50KG93bmVyRG9jdW1lbnQsIGV2ZW50c0Zvci50b3VjaC5zdG9wLCB0aGlzLmhhbmRsZURyYWdTdG9wKTtcclxuICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZVVzZXJTZWxlY3RIYWNrKSByZW1vdmVVc2VyU2VsZWN0U3R5bGVzKG93bmVyRG9jdW1lbnQuYm9keSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnU3RhcnQ6IEV2ZW50SGFuZGxlcjxNb3VzZVRvdWNoRXZlbnQ+ID0gKGUpID0+IHtcclxuICAgIC8vIE1ha2UgaXQgcG9zc2libGUgdG8gYXR0YWNoIGV2ZW50IGhhbmRsZXJzIG9uIHRvcCBvZiB0aGlzIG9uZS5cclxuICAgIHRoaXMucHJvcHMub25Nb3VzZURvd24oZSk7XHJcblxyXG4gICAgLy8gT25seSBhY2NlcHQgbGVmdC1jbGlja3MuXHJcbiAgICBpZiAoIXRoaXMucHJvcHMuYWxsb3dBbnlDbGljayAmJiB0eXBlb2YgZS5idXR0b24gPT09ICdudW1iZXInICYmIGUuYnV0dG9uICE9PSAwKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgLy8gR2V0IG5vZGVzLiBCZSBzdXJlIHRvIGdyYWIgcmVsYXRpdmUgZG9jdW1lbnQgKGNvdWxkIGJlIGlmcmFtZWQpXHJcbiAgICBjb25zdCBkb21Ob2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICBjb25zdCB7b3duZXJEb2N1bWVudH0gPSBkb21Ob2RlO1xyXG5cclxuICAgIC8vIFNob3J0IGNpcmN1aXQgaWYgaGFuZGxlIG9yIGNhbmNlbCBwcm9wIHdhcyBwcm92aWRlZCBhbmQgc2VsZWN0b3IgZG9lc24ndCBtYXRjaC5cclxuICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8XHJcbiAgICAgICghKGUudGFyZ2V0IGluc3RhbmNlb2Ygb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5Ob2RlKSkgfHxcclxuICAgICAgKHRoaXMucHJvcHMuaGFuZGxlICYmICFtYXRjaGVzU2VsZWN0b3JBbmRQYXJlbnRzVG8oZS50YXJnZXQsIHRoaXMucHJvcHMuaGFuZGxlLCBkb21Ob2RlKSkgfHxcclxuICAgICAgKHRoaXMucHJvcHMuY2FuY2VsICYmIG1hdGNoZXNTZWxlY3RvckFuZFBhcmVudHNUbyhlLnRhcmdldCwgdGhpcy5wcm9wcy5jYW5jZWwsIGRvbU5vZGUpKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IHRvdWNoIGlkZW50aWZpZXIgaW4gY29tcG9uZW50IHN0YXRlIGlmIHRoaXMgaXMgYSB0b3VjaCBldmVudC4gVGhpcyBhbGxvd3MgdXMgdG9cclxuICAgIC8vIGRpc3Rpbmd1aXNoIGJldHdlZW4gaW5kaXZpZHVhbCB0b3VjaGVzIG9uIG11bHRpdG91Y2ggc2NyZWVucyBieSBpZGVudGlmeWluZyB3aGljaFxyXG4gICAgLy8gdG91Y2hwb2ludCB3YXMgc2V0IHRvIHRoaXMgZWxlbWVudC5cclxuICAgIGNvbnN0IHRvdWNoSWRlbnRpZmllciA9IGdldFRvdWNoSWRlbnRpZmllcihlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3RvdWNoSWRlbnRpZmllcn0pO1xyXG5cclxuICAgIC8vIEdldCB0aGUgY3VycmVudCBkcmFnIHBvaW50IGZyb20gdGhlIGV2ZW50LiBUaGlzIGlzIHVzZWQgYXMgdGhlIG9mZnNldC5cclxuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0Q29udHJvbFBvc2l0aW9uKGUsIHRvdWNoSWRlbnRpZmllciwgdGhpcyk7XHJcbiAgICBpZiAocG9zaXRpb24gPT0gbnVsbCkgcmV0dXJuOyAvLyBub3QgcG9zc2libGUgYnV0IHNhdGlzZmllcyBmbG93XHJcbiAgICBjb25zdCB7eCwgeX0gPSBwb3NpdGlvbjtcclxuXHJcbiAgICAvLyBDcmVhdGUgYW4gZXZlbnQgb2JqZWN0IHdpdGggYWxsIHRoZSBkYXRhIHBhcmVudHMgbmVlZCB0byBtYWtlIGEgZGVjaXNpb24gaGVyZS5cclxuICAgIGNvbnN0IGNvcmVFdmVudCA9IGNyZWF0ZUNvcmVEYXRhKHRoaXMsIHgsIHkpO1xyXG5cclxuICAgIGxvZygnRHJhZ2dhYmxlQ29yZTogaGFuZGxlRHJhZ1N0YXJ0OiAlaicsIGNvcmVFdmVudCk7XHJcblxyXG4gICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyLiBJZiBpdCByZXR1cm5zIGV4cGxpY2l0IGZhbHNlLCBjYW5jZWwuXHJcbiAgICBsb2coJ2NhbGxpbmcnLCB0aGlzLnByb3BzLm9uU3RhcnQpO1xyXG4gICAgY29uc3Qgc2hvdWxkVXBkYXRlID0gdGhpcy5wcm9wcy5vblN0YXJ0KGUsIGNvcmVFdmVudCk7XHJcbiAgICBpZiAoc2hvdWxkVXBkYXRlID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIC8vIEFkZCBhIHN0eWxlIHRvIHRoZSBib2R5IHRvIGRpc2FibGUgdXNlci1zZWxlY3QuIFRoaXMgcHJldmVudHMgdGV4dCBmcm9tXHJcbiAgICAvLyBiZWluZyBzZWxlY3RlZCBhbGwgb3ZlciB0aGUgcGFnZS5cclxuICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZVVzZXJTZWxlY3RIYWNrKSBhZGRVc2VyU2VsZWN0U3R5bGVzKG93bmVyRG9jdW1lbnQuYm9keSk7XHJcblxyXG4gICAgLy8gSW5pdGlhdGUgZHJhZ2dpbmcuIFNldCB0aGUgY3VycmVudCB4IGFuZCB5IGFzIG9mZnNldHNcclxuICAgIC8vIHNvIHdlIGtub3cgaG93IG11Y2ggd2UndmUgbW92ZWQgZHVyaW5nIHRoZSBkcmFnLiBUaGlzIGFsbG93cyB1c1xyXG4gICAgLy8gdG8gZHJhZyBlbGVtZW50cyBhcm91bmQgZXZlbiBpZiB0aGV5IGhhdmUgYmVlbiBtb3ZlZCwgd2l0aG91dCBpc3N1ZS5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkcmFnZ2luZzogdHJ1ZSxcclxuXHJcbiAgICAgIGxhc3RYOiB4LFxyXG4gICAgICBsYXN0WTogeVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWRkIGV2ZW50cyB0byB0aGUgZG9jdW1lbnQgZGlyZWN0bHkgc28gd2UgY2F0Y2ggd2hlbiB0aGUgdXNlcidzIG1vdXNlL3RvdWNoIG1vdmVzIG91dHNpZGUgb2ZcclxuICAgIC8vIHRoaXMgZWxlbWVudC4gV2UgdXNlIGRpZmZlcmVudCBldmVudHMgZGVwZW5kaW5nIG9uIHdoZXRoZXIgb3Igbm90IHdlIGhhdmUgZGV0ZWN0ZWQgdGhhdCB0aGlzXHJcbiAgICAvLyBpcyBhIHRvdWNoLWNhcGFibGUgZGV2aWNlLlxyXG4gICAgYWRkRXZlbnQob3duZXJEb2N1bWVudCwgZHJhZ0V2ZW50Rm9yLm1vdmUsIHRoaXMuaGFuZGxlRHJhZyk7XHJcbiAgICBhZGRFdmVudChvd25lckRvY3VtZW50LCBkcmFnRXZlbnRGb3Iuc3RvcCwgdGhpcy5oYW5kbGVEcmFnU3RvcCk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRHJhZzogRXZlbnRIYW5kbGVyPE1vdXNlVG91Y2hFdmVudD4gPSAoZSkgPT4ge1xyXG5cclxuICAgIC8vIFByZXZlbnQgc2Nyb2xsaW5nIG9uIG1vYmlsZSBkZXZpY2VzLCBsaWtlIGlwYWQvaXBob25lLlxyXG4gICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNobW92ZScpIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgZHJhZyBwb2ludCBmcm9tIHRoZSBldmVudC4gVGhpcyBpcyB1c2VkIGFzIHRoZSBvZmZzZXQuXHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IGdldENvbnRyb2xQb3NpdGlvbihlLCB0aGlzLnN0YXRlLnRvdWNoSWRlbnRpZmllciwgdGhpcyk7XHJcbiAgICBpZiAocG9zaXRpb24gPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgbGV0IHt4LCB5fSA9IHBvc2l0aW9uO1xyXG5cclxuICAgIC8vIFNuYXAgdG8gZ3JpZCBpZiBwcm9wIGhhcyBiZWVuIHByb3ZpZGVkXHJcbiAgICBpZiAoeCAhPT0geCkgZGVidWdnZXI7XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5ncmlkKSkge1xyXG4gICAgICBsZXQgZGVsdGFYID0geCAtIHRoaXMuc3RhdGUubGFzdFgsIGRlbHRhWSA9IHkgLSB0aGlzLnN0YXRlLmxhc3RZO1xyXG4gICAgICBbZGVsdGFYLCBkZWx0YVldID0gc25hcFRvR3JpZCh0aGlzLnByb3BzLmdyaWQsIGRlbHRhWCwgZGVsdGFZKTtcclxuICAgICAgaWYgKCFkZWx0YVggJiYgIWRlbHRhWSkgcmV0dXJuOyAvLyBza2lwIHVzZWxlc3MgZHJhZ1xyXG4gICAgICB4ID0gdGhpcy5zdGF0ZS5sYXN0WCArIGRlbHRhWCwgeSA9IHRoaXMuc3RhdGUubGFzdFkgKyBkZWx0YVk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29yZUV2ZW50ID0gY3JlYXRlQ29yZURhdGEodGhpcywgeCwgeSk7XHJcblxyXG4gICAgbG9nKCdEcmFnZ2FibGVDb3JlOiBoYW5kbGVEcmFnOiAlaicsIGNvcmVFdmVudCk7XHJcblxyXG4gICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyLiBJZiBpdCByZXR1cm5zIGV4cGxpY2l0IGZhbHNlLCB0cmlnZ2VyIGVuZC5cclxuICAgIGNvbnN0IHNob3VsZFVwZGF0ZSA9IHRoaXMucHJvcHMub25EcmFnKGUsIGNvcmVFdmVudCk7XHJcbiAgICBpZiAoc2hvdWxkVXBkYXRlID09PSBmYWxzZSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vICRGbG93SWdub3JlXHJcbiAgICAgICAgdGhpcy5oYW5kbGVEcmFnU3RvcChuZXcgTW91c2VFdmVudCgnbW91c2V1cCcpKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgLy8gT2xkIGJyb3dzZXJzXHJcbiAgICAgICAgY29uc3QgZXZlbnQgPSAoKGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpOiBhbnkpOiBNb3VzZVRvdWNoRXZlbnQpO1xyXG4gICAgICAgIC8vIEkgc2VlIHdoeSB0aGlzIGluc2FuaXR5IHdhcyBkZXByZWNhdGVkXHJcbiAgICAgICAgLy8gJEZsb3dJZ25vcmVcclxuICAgICAgICBldmVudC5pbml0TW91c2VFdmVudCgnbW91c2V1cCcsIHRydWUsIHRydWUsIHdpbmRvdywgMCwgMCwgMCwgMCwgMCwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAsIG51bGwpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRHJhZ1N0b3AoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbGFzdFg6IHgsXHJcbiAgICAgIGxhc3RZOiB5XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVEcmFnU3RvcDogRXZlbnRIYW5kbGVyPE1vdXNlVG91Y2hFdmVudD4gPSAoZSkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmRyYWdnaW5nKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcG9zaXRpb24gPSBnZXRDb250cm9sUG9zaXRpb24oZSwgdGhpcy5zdGF0ZS50b3VjaElkZW50aWZpZXIsIHRoaXMpO1xyXG4gICAgaWYgKHBvc2l0aW9uID09IG51bGwpIHJldHVybjtcclxuICAgIGNvbnN0IHt4LCB5fSA9IHBvc2l0aW9uO1xyXG4gICAgY29uc3QgY29yZUV2ZW50ID0gY3JlYXRlQ29yZURhdGEodGhpcywgeCwgeSk7XHJcbiAgICBjb25zdCB7b3duZXJEb2N1bWVudH0gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcclxuXHJcbiAgICAvLyBSZW1vdmUgdXNlci1zZWxlY3QgaGFja1xyXG4gICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlVXNlclNlbGVjdEhhY2spIHJlbW92ZVVzZXJTZWxlY3RTdHlsZXMob3duZXJEb2N1bWVudC5ib2R5KTtcclxuXHJcbiAgICBsb2coJ0RyYWdnYWJsZUNvcmU6IGhhbmRsZURyYWdTdG9wOiAlaicsIGNvcmVFdmVudCk7XHJcblxyXG4gICAgLy8gUmVzZXQgdGhlIGVsLlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRyYWdnaW5nOiBmYWxzZSxcclxuICAgICAgbGFzdFg6IE5hTixcclxuICAgICAgbGFzdFk6IE5hTlxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyXHJcbiAgICB0aGlzLnByb3BzLm9uU3RvcChlLCBjb3JlRXZlbnQpO1xyXG5cclxuICAgIC8vIFJlbW92ZSBldmVudCBoYW5kbGVyc1xyXG4gICAgbG9nKCdEcmFnZ2FibGVDb3JlOiBSZW1vdmluZyBoYW5kbGVycycpO1xyXG4gICAgcmVtb3ZlRXZlbnQob3duZXJEb2N1bWVudCwgZHJhZ0V2ZW50Rm9yLm1vdmUsIHRoaXMuaGFuZGxlRHJhZyk7XHJcbiAgICByZW1vdmVFdmVudChvd25lckRvY3VtZW50LCBkcmFnRXZlbnRGb3Iuc3RvcCwgdGhpcy5oYW5kbGVEcmFnU3RvcCk7XHJcbiAgfTtcclxuXHJcbiAgb25Nb3VzZURvd246IEV2ZW50SGFuZGxlcjxNb3VzZVRvdWNoRXZlbnQ+ID0gKGUpID0+IHtcclxuICAgIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci5tb3VzZTsgLy8gb24gdG91Y2hzY3JlZW4gbGFwdG9wcyB3ZSBjb3VsZCBzd2l0Y2ggYmFjayB0byBtb3VzZVxyXG5cclxuICAgIHJldHVybiB0aGlzLmhhbmRsZURyYWdTdGFydChlKTtcclxuICB9O1xyXG5cclxuICBvbk1vdXNlVXA6IEV2ZW50SGFuZGxlcjxNb3VzZVRvdWNoRXZlbnQ+ID0gKGUpID0+IHtcclxuICAgIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci5tb3VzZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVEcmFnU3RvcChlKTtcclxuICB9O1xyXG5cclxuICAvLyBTYW1lIGFzIG9uTW91c2VEb3duIChzdGFydCBkcmFnKSwgYnV0IG5vdyBjb25zaWRlciB0aGlzIGEgdG91Y2ggZGV2aWNlLlxyXG4gIG9uVG91Y2hTdGFydDogRXZlbnRIYW5kbGVyPE1vdXNlVG91Y2hFdmVudD4gPSAoZSkgPT4ge1xyXG4gICAgLy8gV2UncmUgb24gYSB0b3VjaCBkZXZpY2Ugbm93LCBzbyBjaGFuZ2UgdGhlIGV2ZW50IGhhbmRsZXJzXHJcbiAgICBkcmFnRXZlbnRGb3IgPSBldmVudHNGb3IudG91Y2g7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlRHJhZ1N0YXJ0KGUpO1xyXG4gIH07XHJcblxyXG4gIG9uVG91Y2hFbmQ6IEV2ZW50SGFuZGxlcjxNb3VzZVRvdWNoRXZlbnQ+ID0gKGUpID0+IHtcclxuICAgIC8vIFdlJ3JlIG9uIGEgdG91Y2ggZGV2aWNlIG5vdywgc28gY2hhbmdlIHRoZSBldmVudCBoYW5kbGVyc1xyXG4gICAgZHJhZ0V2ZW50Rm9yID0gZXZlbnRzRm9yLnRvdWNoO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmhhbmRsZURyYWdTdG9wKGUpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpOiBSZWFjdC5FbGVtZW50PGFueT4ge1xyXG4gICAgLy8gUmV1c2UgdGhlIGNoaWxkIHByb3ZpZGVkXHJcbiAgICAvLyBUaGlzIG1ha2VzIGl0IGZsZXhpYmxlIHRvIHVzZSB3aGF0ZXZlciBlbGVtZW50IGlzIHdhbnRlZCAoZGl2LCB1bCwgZXRjKVxyXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLCB7XHJcbiAgICAgIHN0eWxlOiBzdHlsZUhhY2tzKHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHMuc3R5bGUpLFxyXG5cclxuICAgICAgLy8gTm90ZTogbW91c2VNb3ZlIGhhbmRsZXIgaXMgYXR0YWNoZWQgdG8gZG9jdW1lbnQgc28gaXQgd2lsbCBzdGlsbCBmdW5jdGlvblxyXG4gICAgICAvLyB3aGVuIHRoZSB1c2VyIGRyYWdzIHF1aWNrbHkgYW5kIGxlYXZlcyB0aGUgYm91bmRzIG9mIHRoZSBlbGVtZW50LlxyXG4gICAgICBvbk1vdXNlRG93bjogdGhpcy5vbk1vdXNlRG93bixcclxuICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLm9uVG91Y2hTdGFydCxcclxuICAgICAgb25Nb3VzZVVwOiB0aGlzLm9uTW91c2VVcCxcclxuICAgICAgb25Ub3VjaEVuZDogdGhpcy5vblRvdWNoRW5kXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL0RyYWdnYWJsZUNvcmUuZXM2IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEBmbG93XHJcbi8qZXNsaW50IG5vLWNvbnNvbGU6MCovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZyguLi5hcmdzOiBhbnkpIHtcclxuICBpZiAocHJvY2Vzcy5lbnYuRFJBR0dBQkxFX0RFQlVHKSBjb25zb2xlLmxvZyguLi5hcmdzKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdXRpbHMvbG9nLmVzNiJdLCJzb3VyY2VSb290IjoiIn0=