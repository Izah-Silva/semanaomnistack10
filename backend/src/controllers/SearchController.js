const Dev = require('../models/Dev') ;
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const {latitude, longitude, techs } = request.query;

        const techsarray = parseStringAsArray(techs);
        const devs = await Dev.find({
            techs: {
                $in: techsarray,
            },
            location: {
                $near: {
                    $geometry:{
                        type:'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });
    
     //buscar devs em um raio de 10km
    //Filtrar por tecnologias
    return response.json( devs );
    }
}