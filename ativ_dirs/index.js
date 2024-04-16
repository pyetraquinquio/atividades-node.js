const path = require("path");
const fs = require('fs')


const antiga = path.join('./arquivos_desorganizados');
const nova = path.join('./arquivos_organizados')


if (!fs.existsSync('./arquivos_organizados')) {
    fs.mkdirSync('arquivos_organizados')
} else if (!fs.existsSync('./arquivos_organizados/documentos')) {
    fs.mkdirSync('arquivos_organizados/documentos')
} else if (!fs.existsSync('./arquivos_organizados/imagens')) {
    fs.mkdirSync('arquivos_organizados/imagens')
}else if (!fs.existsSync('./arquivos_organizados/outros')) {
    fs.mkdirSync('arquivos_organizados/outros')
}

async function moveFile(antiga, nova) {
    try {
        await fs.promises.rename(antiga, nova);
        console.log(`Movido de ${antiga} para ${nova}`);
    } catch (error) {
        console.error("Erro ao mover o arquivo:", error);
    }
}

fs.readdir(antiga, (err,files) => {
    if (err) {
        console.log(err);
        return;
    }

files.forEach(file => {
    const tipo = path.extname(file);

    if(tipo === '.pdf') {
        moveFile(path.join(antiga, file), path.join(nova, 'documentos', file));
    }

    if(tipo === '.txt') {
        moveFile(path.join(antiga, file), path.join(nova, 'documentos', file));
    }


    if(tipo === '.PNG') {
        moveFile(path.join(antiga, file), path.join(nova, 'imagens', file));
    }

    if(tipo === '.html') {
        moveFile(path.join(antiga, file), path.join(nova, 'outros', file));
    }

    if(tipo === '.sql') {
        moveFile(path.join(antiga, file), path.join(nova, 'outros', file));
    }

})
})