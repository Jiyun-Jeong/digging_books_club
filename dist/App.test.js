"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var App_tsx_1 = require("./App.tsx");
test('renders learn react link', function () {
    (0, react_1.render)(<App_tsx_1.default />);
    var linkElement = react_1.screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
