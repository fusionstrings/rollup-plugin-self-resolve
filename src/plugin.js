import { fileURLToPath, pathToFileURL } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const { name } = require(`${process.cwd()}/package.json`);

export default function plugin() {
	return {
		name: 'rollup-plugin-self-resolve',

		async resolveId(source, importer) {
			const selfResolve = source.startsWith(name);

			if (selfResolve) {
				try {
					const importerURL = pathToFileURL(importer);
					const assets = await import.meta.resolve(
						source,
						importerURL.href
					);

					const assetsPath = fileURLToPath(assets);

					return assetsPath;
				} catch (error) {
					throw new Error(error);
				}
			}
			return null; // other ids should be handled as usually
		},
	};
}
