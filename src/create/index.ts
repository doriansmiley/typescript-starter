import {
    Rule,
    SchematicContext,
    Tree,
    apply,
    mergeWith,
    chain,
    url,
    move,
    MergeStrategy, template,
} from '@angular-devkit/schematics';
import {strings} from '@angular-devkit/core';
import {Schema} from './schema';

export function create(_options: Schema): Rule {
    return (host: Tree, _context: SchematicContext) => {

        const {dst} = _options;
        _context.logger.info( JSON.stringify({..._options}));

        const templateSource = apply(url('./files'), [
            template({
                ..._options,
                ...strings
            }),
            move(dst),
        ]);
        const rule = chain([
            mergeWith(templateSource, MergeStrategy.Overwrite)
        ]);
        return rule(host, _context);
    }
}
