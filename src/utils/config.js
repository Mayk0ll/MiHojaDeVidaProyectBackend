import * as url from 'url';

const config = {
    PORT: 9605,
    DIRNAME: url.fileURLToPath(new URL('../', import.meta.url)),

    get UPLOAD_DIR() { return path.join(this.DIRNAME, 'uploads') }
};

export default config;