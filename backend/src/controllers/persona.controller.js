const { getpersonas,getPersona, createPersona,updatePersona, deletePersona } = require('../models/persona.model');


const getPersonasController = async (req, res) => {
    await getpersonas((err, result)=>{
        if(err){
            res.json({
                data: false,
                err
            }).status(500);
        }
        else{
            res.json({
                data: true,
                result
            }).status(200);
        }
    });
};
const getPersonaController = async (req, res) => {
    const { matricula } = req.params;
    await getPersona(matricula, (err, result)=>{
        if(err){
            res.json({
                data: false,
                err
            }).status(400);
        }else{
            res.json({
                data: true,
                result
            }).status(200);
        }
    });
};

const createPersonaController = async (req, res) => {
    const persona = req.body;
    await createPersona(persona, (err, result)=>{
        if(err){
            res.json({
                data: false,
                err
            }).status(400);
        }
        else{
            res.json({
                data: true,
                result
            }).status(201);
        }
    });
};
// Actualizar persona por matricula
const updatePersonaController = async (req, res) => {
    const persona = req.body;
    const { matricula } = req.params;
    await updatePersona(persona, matricula, (err, result)=>{
        if(err){
            res.json({
                data: false,
                err
            }).status(400);
        }
        else{
            res.json({
                data: true,
                result
            }).status(200);
        }
    });
};

const deletePersonaController = async (req, res) => {
    const { matricula } = req.params;
    await deletePersona(matricula, (err, result)=>{
        if(err){
            res.json({
                data: false,
                err
            }).status(400);
        }
        else{
            res.json({
                data: true,
                result
            }).status(200);
        }
    });
};




module.exports = {
    getPersonasController,
    getPersonaController,
    createPersonaController,
    updatePersonaController,
    deletePersonaController
}