// Helper class for debugging
export function DumpMissingPropertiesBase() { }
DumpMissingPropertiesBase.prototype = new Proxy({}, {
    get(target, prop, receiver) {
        console.log("PROP", prop.toString());
        return target[prop];
    }
});

// In jsshell, mock just enough details of DOM for matrix to work.
if (!("window" in globalThis)) {
    globalThis.window = globalThis;

    let lastTimeoutId = 0;
    globalThis.setTimeout = function (callback, delay) {
        lastTimeoutId++;
        return lastTimeoutId;
    }

    globalThis.clearTimeout = () => null;
    globalThis.dispatchEvent = () => null;
    globalThis.addEventListener = () => null;
    globalThis.removeEventListener = () => null;

    globalThis.XMLHttpRequest = function () { }
    globalThis.Worker = function () { };

    function _GetElementConstructor(tagName) {
        switch (tagName.toLowerCase()) {
            case "html":
                return globalThis.HTMLHtmlElement;
            case "body":
                return globalThis.HTMLBodyElement;
            case "b":
            case "main":
                return globalThis.HTMLElement;
            case "div":
                return globalThis.HTMLDivElement;
            case "hr":
                return globalThis.HTMLHRElement;
            case "br":
                return globalThis.HTMLBRElement;
            case "h1":
            case "h2":
            case "h3":
                return globalThis.HTMLHeadingElement;
            case "li":
                return globalThis.HTMLLIElement;
            case "ol":
                return globalThis.HTMLOListElement;
            case "span":
                return globalThis.HTMLSpanElement;
            case "p":
                return globalThis.HTMLParagraphElement;
            case "a":
                return globalThis.HTMLAnchorElement;
            case "button":
                return globalThis.HTMLButtonElement;
            case "input":
                return globalThis.HTMLInputElement;
            case "img":
                return globalThis.HTMLImageElement;
            case "script":
                return globalThis.HTMLScriptElement;
            case "iframe":
                return globalThis.HTMLIFrameElement;
            case "canvas":
                return globalThis.HTMLCanvasElement;
            case "react":
                return globalThis.HTMLUnknownElement;
        }
        console.log("UNKNOWN-HTMLELEMENT", tagName);
        return globalThis.HTMLElement;
    }

    globalThis.EventTarget = class {
        dispatchEvent(event) {
            if (event.type === "react-invokeguardedcallback") {
                if (this._react_callback) {
                    for (let cb of this._react_callback) {
                        cb(event);
                    }
                }
            }
            return true;
        }
        addEventListener(type, listener) {
            if (type === "react-invokeguardedcallback") {
                if (!this._react_callback) {
                    this._react_callback = [];
                }
                this._react_callback.push(listener);
            }
        }
        removeEventListener(type, listener) {
            if (type === "react-invokeguardedcallback") {
                if (this._react_callback) {
                    this._react_callback = this._react_callback.filter(el => el !== listener);
                }
            }
        }
    };
    globalThis.Node = class extends globalThis.EventTarget {
        static ELEMENT_NODE = 1;
        static DOCUMENT_NODE = 9;
        static DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;
        compareDocumentPosition(otherNode) {
            return globalThis.Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
        }
        childNodes = [];
        parentNode = null;
        parentElement = null;
        appendChild(childNode) {
            this.childNodes.push(childNode);
            if (childNode instanceof globalThis.Node) {
                childNode.parentNode = this;
                if (this instanceof globalThis.Element) {
                    childNode.parentElement = this;
                } else {
                    childNode.parentElement = null;
                }
            }
        }
        removeChild(child) {
            this.childNodes = this.childNodes.filter(node => node !== child);
        }
        insertBefore(childName, ref) {
            let idx = this.childNodes.indexOf(ref);
            this.childNodes.splice(idx, 0, childName);
        }
        get firstChild() {
            const nodes = this.childNodes;
            if (nodes.length === 0) {
                return null;
            }
            return nodes[0];
        }
        get lastChild() {
            const nodes = this.childNodes;
            if (nodes.length === 0) {
                return null;
            }
            return nodes[nodes.length - 1];
        }
        get nextSibling() {
            const nodes = this.parentNode.childNodes;
            const index = nodes.indexOf(this);
            if (index < 0) {
                return null;
            }
            if (index + 1 >= nodes.length) {
                return null;
            }
            return nodes[index + 1];
        }
        get ownerDocument() {
            return globalThis.document;
        }
    };
    globalThis.Element = class extends globalThis.Node {
        constructor(tagName) {
            super();

            this.tagName = tagName.toUpperCase();
            this.nodeName = tagName.toUpperCase();
            this[Symbol.toStringTag] = _GetElementConstructor(tagName).name;
        }
        get nodeType() { return Node.ELEMENT_NODE; };
        get namespaceURI() { return "http://www.w3.org/1999/xhtml"; }
        getAttribute() { return null; }
        setAttribute(key, val) { this[key] = val; }
        get classList() {
            return {
                add: () => null,
            };
        }
        get children() {
            return this.childNodes.filter(n => n instanceof globalThis.Element);
        }
        get firstElementChild() {
            const elements = this.children;
            if (elements.length === 0) {
                return null;
            }
            return elements[0];
        }
        get lastElementChild() {
            const elements = this.children;
            if (elements.length === 0) {
                return null;
            }
            return elements[elements.length - 1];
        }
        getElementsByTagName(tagName) {
            tagName = tagName.toUpperCase();
            return this.childNodes.filter(n => n.tagName === tagName);
        }
        get style() {
            let self = this;
            return {
                getPropertyValue() { },
                setProperty() { },
            };
        }
        getBoundingClientRect() {
            return {
                x: 100,
                y: 100,
                width: 100,
                height: 100,
                top: 100,
                right: 200,
                bottom: 200,
                left: 100,
            };
        }
        dataset = {};
    };
    globalThis.HTMLElement = class extends globalThis.Element {
        contentEditable = false;
        focus() { }
    };
    globalThis.HTMLHtmlElement = class extends globalThis.HTMLElement { };
    globalThis.HTMLAnchorElement = class extends globalThis.HTMLElement { };
    globalThis.HTMLDivElement = class extends globalThis.HTMLElement { };
    globalThis.HTMLParagraphElement = class extends globalThis.HTMLElement { };
    globalThis.HTMLHRElement = class extends globalThis.HTMLElement { };
    globalThis.HTMLBRElement = class extends globalThis.HTMLElement { };
    globalThis.HTMLHeadingElement = class extends globalThis.HTMLElement { };
    globalThis.HTMLBodyElement = class extends globalThis.HTMLElement { };
    globalThis.HTMLIFrameElement = class extends globalThis.HTMLElement { };
    globalThis.HTMLScriptElement = class extends globalThis.HTMLElement { };
    globalThis.HTMLInputElement = class extends globalThis.HTMLElement { };
    globalThis.HTMLButtonElement = class extends globalThis.HTMLElement { };
    globalThis.HTMLImageElement = class extends globalThis.HTMLElement { };
    globalThis.HTMLCanvasElement = class extends globalThis.HTMLElement {
        getContext() {
            return {
                fillRect() { },
            };
        }
        toDataURL() { return "data://"; }
    };
    globalThis.HTMLUnknownElement = class extends globalThis.HTMLElement { };
    globalThis.HTMLLIElement = class extends globalThis.HTMLElement { };
    globalThis.HTMLOListElement = class extends globalThis.HTMLElement { };
    globalThis.HTMLSpanElement = class extends globalThis.HTMLElement { };
    globalThis.CharacterData = class extends globalThis.Node { };
    globalThis.Text = class extends globalThis.CharacterData { };

    globalThis.Event = class {
        initCustomEvent() { }
        initEvent() { }
    };
    globalThis.UIEvent = class extends globalThis.Event { };

    globalThis.Range = class {
        setStart() { }
        collapse() { }
    };
    globalThis.Selection = class {
        removeAllRanges() { }
        addRange() { }
    };

    globalThis.URL = class {
        get hostname() {
            return "example.com";
        }
    };

    globalThis.fetch = function () {
        return new Promise(function () { });
    }

    globalThis.navigator = {
        platform: "shell",
        userAgent: "shell",
    };

    globalThis.localStorage = {
        getItem: () => null,
        setItem: () => null,
    };
    globalThis.sessionStorage = globalThis.localStorage;

    globalThis.matchMedia = function () {
        return {
            matches: false,
        };
    }

    globalThis.location = {
        host: "example.com",
        pathname: "/",
    };

    globalThis.document = {
        __proto__: globalThis.Node.prototype,
        body: new globalThis.HTMLBodyElement("body"),
        documentElement: new globalThis.HTMLHtmlElement("html"),
        childNodes: [],
        cookie: "",
        compatMode: "CSS1Compat",
        host: "example.com",
        readyState: "complete",
        nodeType: globalThis.Node.DOCUMENT_NODE,
        createEvent: () => new globalThis.Event,
        createTextNode: (data) => {
            let node = new globalThis.Text;
            node.data = data;
            return node;
        },
        createElement: (tagName) => {
            let constructor = _GetElementConstructor(tagName);
            return new (constructor)(tagName);
        },
        createRange: () => new globalThis.Range,
        getSelection: () => new globalThis.Selection,
        activeElement: null,
    };

    globalThis.document.appendChild(globalThis.document.documentElement);
    globalThis.document.documentElement.appendChild(globalThis.document.body);

    globalThis.console.error = globalThis.console.log;
    globalThis.console.warn = globalThis.console.log;
} // !("window" in globalThis)
