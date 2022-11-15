import FAQs from '../model/FAQs';
import { Request, Response } from 'express';
import User from '../model/User';

const newFAQ = async (req: Request, res: Response) => {
	const { Question1, Ansewr1, name } = req.body;
    const date1 = new Date();
    const points = 0;
    const user1 = await User.findOne({ name })
    if (user1!){
        return res.status(400).json({ message: 'User not found.' })
    }
	const newFAQs = new FAQs({
	Question: Question1,
        Ansewr:Ansewr1,
        points,
        user: user1._id,
        date: date1
	});
	await newFAQs.save().catch(Error);
	res.status(200).json({ auth: true });
};


const getallFAQs = async (req: Request, res: Response) => {
	const FAQs1 = await FAQs.find();
	res.json(FAQs1);
}

const deleteFAQ = async (req: Request, res: Response) => {
	const FAQ1 = await FAQs.findById(req.params.id);
	if (!FAQ1) {
		return res.status(400).json({ message: 'FAQ not found.' });
	}
	await FAQs.deleteOne({ _id: req.params.id });
	res.status(200).json({ auth: true });
};
const getOneFAQ = async (req: Request, res: Response) => {
	try {
		const FAQ1 = await FAQs.findById(req.params.id);
		res.json(FAQ1);
	}
	catch (err) {
		res.status(400).send({ message: 'FAQ not found', err });
	}
}
const updateFAQ = async (req: Request, res: Response) => {
	const _id = req.params.id;
	const { Question, Ansewr } = req.body;
    const date1 = new Date();
	try {
		const faq = await FAQs.findByIdAndUpdate(_id, {
			Question,
		    Ansewr,
            date: date1
		}, {new: true});
		return res.json(faq);
	}
	catch(err) {
		res.status(400).json({ message: 'Cannot update FAQ', err });
	}
}


export default {
	newFAQ,
	getallFAQs,
    deleteFAQ,
    getOneFAQ,
    updateFAQ
};