const rewire = require("rewire")
const react_app_rewire_css_scss = rewire("./react-app-rewire-css-scss")
const cssLoaderMatcher = react_app_rewire_css_scss.__get__("cssLoaderMatcher")
// @ponicode
describe("cssLoaderMatcher", () => {
    test("0", () => {
        let callFunction = () => {
            cssLoaderMatcher({ loader: "http://placeimg.com/640/480" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            cssLoaderMatcher({ loader: "css-loader" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            cssLoaderMatcher({ loader: "css-loaderhttp://placeimg.com/640/480" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            cssLoaderMatcher({ loader: -1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            cssLoaderMatcher({ loader: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            cssLoaderMatcher(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("react_app_rewire_css_scss", () => {
    test("0", () => {
        let callFunction = () => {
            react_app_rewire_css_scss({ module: { rules: "dedicated" } }, "/path/to/file")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            react_app_rewire_css_scss({ module: { rules: "logistical" } }, "C:\\\\path\\to\\folder\\")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            react_app_rewire_css_scss({ module: { rules: "value-added" } }, "./path/to/file")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            react_app_rewire_css_scss({ module: { rules: "dedicated" } }, "C:\\\\path\\to\\folder\\")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            react_app_rewire_css_scss({ module: { rules: "logistical" } }, "/path/to/file")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            react_app_rewire_css_scss(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
