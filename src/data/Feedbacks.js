import { v4 as uuidv4 } from 'uuid'

const Feedbacks = [
    {
        id: uuidv4(),
        rating: 10,
        text: 'Awesome',
    },
    {
        id: uuidv4(),
        rating: 9,
        text: 'Nice',
    },
    {
        id: uuidv4(),
        rating: 6,
        text: 'Not bad',
    },
];

export default Feedbacks
