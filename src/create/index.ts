import {
    Rule,
    SchematicContext,
    Tree,
    apply,
    mergeWith,
    applyTemplates,
    chain,
    url,
    move,
    MergeStrategy,
} from '@angular-devkit/schematics';
import {strings} from '@angular-devkit/core';
import {Schema} from './schema';

export function create(_options: Schema): Rule {
    return (host: Tree, _context: SchematicContext) => {

        const {dst} = _options;

        // Add SCSS folders and files
        const templateSource = apply(url('./files'), [
            applyTemplates({
                ..._options,
                ...strings
            }),
            move(dst),
        ]);
        const rule = chain([
            mergeWith(templateSource, MergeStrategy.Default)
        ]);
        return rule(host, _context);
    }
}
