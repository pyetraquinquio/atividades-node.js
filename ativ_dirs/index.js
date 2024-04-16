const path = require("path");


const fs = require('fs')

if (!fs.existsSync('./arquivos_organizados')) {
    fs.mkdirSync('arquivos_organizados')
} else if (!fs.existsSync('./arquivos_organizados/documentos')) {
    fs.mkdirSync('arquivos_organizados/documentos')
} else if (!fs.existsSync('./arquivos_organizados/imagens')) {
    fs.mkdirSync('arquivos_organizados/imagens')
}else if (!fs.existsSync('./arquivos_organizados/outros')) {
    fs.mkdirSync('arquivos_organizados/outros')
}

if