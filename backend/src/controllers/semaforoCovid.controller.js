const SemaforoCovid = require('../models/semaforoCovid');

const createSemaforo = async (req, res) => {

    const { temperatura, sintomas, persona } = req.body;

    const newSemaforoCovid = new SemaforoCovid({ temperatura, sintomas, persona });

    const productSave = await newSemaforoCovid.save()

    res.status(201).json(productSave);
};

const getSemaforos = async (req, res) => {
    const products = await SemaforoCovid.find();
    res.status(200).json(products);
};

const getSemaforoById = async (req, res) => {
    const { semaforoCovidId } = req.params;
    const product = await SemaforoCovid.findById(semaforoCovidId);
    res.status(200).json(product);
};

const updateSemaforoById = async (req, res) => {
    const { semaforoCovidId } = req.params;
    const { temperatura, sintomas, persona } = req.body;
    const updateSemaforo = await SemaforoCovid.findByIdAndUpdate(semaforoCovidId, { temperatura, sintomas, persona }, { new: true });
    res.status(200).json(updateSemaforo);


};

const deleteSemaforoById = async (req, res) => {
    const { semaforoCovidId } = req.params;
    await SemaforoCovid.findByIdAndDelete(semaforoCovidId);
    res.status(204).json();
};

module.exports = {
    createSemaforo,
    getSemaforos,
    getSemaforoById,
    updateSemaforoById,
    deleteSemaforoById
};