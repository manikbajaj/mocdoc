import fs from 'fs';
import path from 'path';

const files = {
    getCurrentDirectoryBase: (): string => {
        return path.basename(process.cwd());
    },

    directoryExists: (filePath: string): boolean => {
        return fs.existsSync(filePath);
    }
};

export default files;
