const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

class shortUrlDb{
    static async findUrl(Url){
       return await prisma.url.findFirst({
           where: {
               original:Url
        }})
    }
    static async checkExists(code) {
        return await prisma.url.findUnique({
            where: { code }
        });
    }

   static async createUrl(originalUrl,code){
     return await prisma.url.create(
         {
          data:{
              original: originalUrl,
              code: code,
              shortenUrl: `https://shorten-url-backend-jg04.onrender.com/${code}`,
              numOfClicked: 0

          }
         }
     )
   }
   static async getUrls(){
        return await prisma.url.findMany(
            {
                select:{
                    id:true,
                    shortenUrl:true
                }
            }
        );
   }
   static async findOne(id){
        return await prisma.url.findFirst(
            {
                where: {
                    id: id
                }
            }
        )
   }
    static async incrementClicks(code) {
        return await prisma.url.update({
            where: { code },
            data: {
                numOfClicked: {
                    increment: 1
                }
            }
        });
    }
    static async updateOriginalUrl(id, newOriginalUrl) {
        return await prisma.url.update({
            where: { id },
            data: {
                original: newOriginalUrl
            }
        });
    }
   static async deleteUrl(id){
        return prisma.url.delete({
            where: {
                id: id
            }
        })
   }
}
module.exports = shortUrlDb;