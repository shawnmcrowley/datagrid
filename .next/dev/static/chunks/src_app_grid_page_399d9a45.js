(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/grid/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GridPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ag$2d$grid$2d$react$2f$dist$2f$package$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ag-grid-react/dist/package/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function GridPage() {
    _s();
    const defaultColDef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GridPage.useMemo[defaultColDef]": ()=>({
                flex: 1,
                filter: true,
                floatingFilter: true,
                filterParams: {
                    buttons: [
                        'apply',
                        'clear'
                    ]
                }
            })
    }["GridPage.useMemo[defaultColDef]"], []);
    const rowData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GridPage.useMemo[rowData]": ()=>[
                {
                    make: "Tesla",
                    model: {
                        large: "Model Y",
                        small: "Model X"
                    },
                    price: 69500,
                    electric: false,
                    date: "12/24/2024"
                },
                {
                    make: "Tesla",
                    model: {
                        large: "Model S",
                        small: "Model X"
                    },
                    price: 64500,
                    electric: true,
                    date: "11/15/2013"
                },
                {
                    make: "Tesla",
                    model: {
                        large: "Model G",
                        small: "Model G"
                    },
                    price: 68500,
                    electric: true,
                    date: "09/12/2006"
                },
                {
                    make: "Chevy",
                    model: {
                        large: "Suburban",
                        small: "Blazer"
                    },
                    price: 57000,
                    electric: true,
                    date: "12/10/2023"
                }
            ]
    }["GridPage.useMemo[rowData]"], []);
    const colDefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GridPage.useMemo[colDefs]": ()=>[
                {
                    field: "make",
                    headerName: "Company"
                },
                {
                    field: "model.small",
                    headerName: "Model"
                },
                {
                    field: "price"
                },
                {
                    field: "electric"
                },
                {
                    field: "date",
                    filter: 'agDateColumnFilter'
                }
            ]
    }["GridPage.useMemo[colDefs]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "2rem",
            height: "100vh"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Data Grid with Nested Objects"
            }, void 0, false, {
                fileName: "[project]/src/app/grid/page.js",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: "calc(100vh - 150px)",
                    width: "100%",
                    marginTop: "1rem"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ag-theme-quartz",
                    style: {
                        height: "100%",
                        width: "100%"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ag$2d$grid$2d$react$2f$dist$2f$package$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgGridReact"], {
                        rowData: rowData,
                        columnDefs: colDefs,
                        defaultColDef: defaultColDef
                    }, void 0, false, {
                        fileName: "[project]/src/app/grid/page.js",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/grid/page.js",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/grid/page.js",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/grid/page.js",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(GridPage, "8Z4/pqZVlaJjlPByDwNJk53ecIE=");
_c = GridPage;
var _c;
__turbopack_context__.k.register(_c, "GridPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_grid_page_399d9a45.js.map