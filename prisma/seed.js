const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const authors = require('./authors');
const books = require('./books');
const statuses = require('./statuses');
const genres = require('./genres');

async function main() {
    for (let author of authors) {
        console.log(author);
        await prisma.authors.upsert({
            create: {
                data: author
            }
        })
    }

    for (let genre of genres) {
        console.log(genre);
        await prisma.genres.create({
            data: genre
        })
    }

    for (let book of books) {
        console.log(book);
        await prisma.books.create({
            data: book
        })
    }

    for (let status of statuses) {
        console.log(status);
        await prisma.statuses.create({
            data: status
        })
    }
}

main().catch(err => {
    console.log(err);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})