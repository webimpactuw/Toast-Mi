import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'order',
    title: 'Order Page',
    type: 'document',
    _type: 'order',
    fields: [
        defineField({
            name: 'time',
            title: 'Time (open daily from 11am to 6pm)',
            type: 'text',
        }),
    ],
})
