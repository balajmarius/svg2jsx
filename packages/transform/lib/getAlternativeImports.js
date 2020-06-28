function getAlternativeImports(el, imports) {
    if (!imports) {
        imports = [];
    }
    const titleCasedName = el.name[0].toUpperCase() + el.name.substring(1);

    if (!imports.includes(titleCasedName)) {
        imports.push(titleCasedName);
    }

    if (el.children) {
        el.children.map(childEl => getAlternativeImports(childEl, imports));
    }

    return imports;
}

module.exports = getAlternativeImports;

