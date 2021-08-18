const {PrismaClient} = require('../src/generated/client');
const prisma = new PrismaClient();
const authors = require('../seeder-data/authors');
const books = require('../seeder-data/books');
const statuses = require('../seeder-data/statuses');
const genres = require('../seeder-data/genres');

async function main() {
    for (let author of authors) {
        await prisma.authors.create({
            data: author
        })
    }

    for (let genre of genres) {
        await prisma.genres.create({
            data: genre
        })
    }

    for (let book of books) {
        await prisma.books.create({
            data: book
        })
    }

    for (let status of statuses) {
        await prisma.statuses.create({
            data: status
        })
    }
}

main().catch(err => {
    console.log(err);
    process.exit(1);
}).finally(async () => {
    console.log("Seeding completed.")
    await prisma.$disconnect();
})