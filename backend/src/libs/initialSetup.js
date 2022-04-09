const Rol = require('../models/Rol');
const Division = require('../models/Division');
const Area = require('../models/Area');


(async () => {
    // Agregar roles a la base de datos si no existen roles
    try {
        const count = await Rol.estimatedDocumentCount();
        if (count > 0) {
            return;
        }
        await Promise.all([
            new Rol({ nombre: "administrador" }).save(),
            new Rol({ nombre: "alumno" }).save()
        ]);
    }
    catch (error) {
        console.log(error);
    }
})();

(async () => {
    // Agregar divisiones a la base de datos si no existen divisiones
    try {
        const count = await Division.estimatedDocumentCount();
        if (count > 0) {
            return;
        }
        const newDivisiones = await Promise.all([
            new Division({ nombre: "Ambiental" }).save(),
            new Division({ nombre: "Automotriz" }).save(),
            new Division({ nombre: "Energías Renovables" }).save(),
            new Division({ nombre: "Gastronomía" }).save(),
            new Division({ nombre: "Ingenieria Industrial" }).save(),
            new Division({ nombre: "Mantemimiento" }).save(),
            new Division({ nombre: "Mecatrónica" }).save(),
            new Division({ nombre: "Negocios" }).save(),
            new Division({ nombre: "Tecnologías de la Informacion" }).save()
        ]);
        const areas = [
            {
                "division": newDivisiones[0]._id, // Ambiental
                "nombre": "Ambiental",
                "grado": "Técnico Superior Universitario"
            },
            {
                "division": newDivisiones[0]._id, // Ambiental
                "nombre": "Ambiental",
                "grado": "Ingenieria"
            },
            {
                "division": newDivisiones[1]._id, // Automotriz
                "nombre": "Automotriz",
                "grado": "Técnico Superior Universitario"
            },
            {
                "division": newDivisiones[1]._id, // Automotriz
                "nombre": "Automotriz",
                "grado": "Ingenieria"
            },
            {
                "division": newDivisiones[2]._id, // Energías Renovables
                "nombre": "Energia Solar",
                "grado": "Técnico Superior Universitario"
            },
            {
                "division": newDivisiones[2]._id, // Energías Renovables
                "nombre": "Energías Renovables",
                "grado": "Ingenieria"
            },
            {
                "division": newDivisiones[3]._id, // Gastronomía
                "nombre": "Gastronomía",
                "grado": "Técnico Superior Universitario"
            },
            {
                "division": newDivisiones[3]._id, // Gastronomía
                "nombre": "Gastronomía",
                "grado": "Licenciatura"
            },
            {
                "division": newDivisiones[4]._id, // Ingeniería Industrial
                "nombre": "Manufactura",
                "grado": "Técnico Superior Universitario"
            },
            {
                "division": newDivisiones[4]._id, // Ingeniería Industrial
                "nombre": "Plásticos",
                "grado": "Técnico Superior Universitario"
            },
            {
                "division": newDivisiones[4]._id, // Ingeniería Industrial
                "nombre": "Industrial",
                "grado": "Ingenieria"
            },
            {
                "division": newDivisiones[5]._id, // Mantenimiento Industrial
                "nombre": "Mantenimiento Industrial",
                "grado": "Técnico Superior Universitario"
            },
            {
                "division": newDivisiones[5]._id, // Mantenimiento Industrial
                "nombre": "Mantenimiento Industrial",
                "grado": "Ingenieria"
            },
            {
                "division": newDivisiones[6]._id, // Mecatrónica
                "nombre": "Sistemas de Manufactura Flexible",
                "grado": "Técnico Superior Universitario"
            },
            {
                "division": newDivisiones[6]._id, // Mecatrónica
                "nombre": "Automatización",
                "grado": "Técnico Superior Universitario"
            },
            {
                "division": newDivisiones[6]._id, // Mecatrónica
                "nombre": "Instalaciones Eléctricas Eficientes",
                "grado": "Técnico Superior Universitario"
            },
            {
                "division": newDivisiones[6]._id, // Mecatrónica
                "nombre": "Mecatrónica",
                "grado": "Ingenieria"
            },
            {
                "division": newDivisiones[7]._id, // Negocios
                "nombre": "Capital Humano",
                "grado": "Técnico Superior Universitario"
            },
            {
                "division": newDivisiones[7]._id, // Negocios
                "nombre": "Mercadotécnia",
                "grado": "Técnico Superior Universitario"
            },
            {
                "division": newDivisiones[7]._id, // Negocios
                "nombre": "Innovación de Negocios Y Mercadotécnia",
                "grado": "Licenciatura"
            },
            {
                "division": newDivisiones[7]._id, // Negocios
                "nombre": "Gestión de Capital Humano",
                "grado": "Licenciatura"
            },
            {
                "division": newDivisiones[8]._id, // Tecnologías de la Información
                "nombre": "Desarrollo de Software en Multiplataforma",
                "grado": "Técnico Superior Universitario"
            },
            {
                "division": newDivisiones[8]._id, // Tecnologías de la Información
                "nombre": "Infrestructura en Redes Digitales",
                "grado": "Técnico Superior Universitario"
            },
            {
                "division": newDivisiones[8]._id, // Tecnologías de la Información
                "nombre": "Desarrollo y Gestión de Software",
                "grado": "Ingenieria"
            },
            {
                "division": newDivisiones[8]._id, // Tecnologías de la Información
                "nombre": "Redes inteligentes y Ciberseguridad",
                "grado": "Ingenieria"
            }
        ];
        // Insertar las areas en la base de datos
        await Area.insertMany(areas);
    }
    catch (error) {
        console.log(error);
    }
})();

