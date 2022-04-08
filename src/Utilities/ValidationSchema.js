import * as Yup from 'yup'

const catSchema = Yup.object().shape({
    CategoryName: Yup.string().max(25, 'Max 25 Characters').required('Required'),
    CategoryDescription: Yup.string().max(50, 'Max 50 Characters')

})

const todoSchema = Yup.object().shape({
    Action: Yup.string().required(),
    Description: Yup.string().max(200, 'Max 200 Characters'),
    CategoryId: Yup.number().required()
})

export {todoSchema};
export default catSchema;