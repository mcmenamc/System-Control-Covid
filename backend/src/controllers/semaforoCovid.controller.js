const SemaforoCovid = require('../models/semaforoCovid');

module.exports.createSemaforo = async (req, res) => {

    const { temperatura, sintomas, persona } = req.body;

    const newSemaforoCovid = new SemaforoCovid({ temperatura, sintomas, persona });
    const productSave = await newSemaforoCovid.save()
    
    res.status(201).json(productSave);
};

module.exports.getSemaforos = async (req, res) => {
    res.json(
        "getproducts"
    );
};

module.exports.getSemaforoById = async (req, res) => {

};

module.exports.updateSemaforoById = async (req, res) => {

};

module.exports.deleteSemaforoById = async (req, res) => {

};

