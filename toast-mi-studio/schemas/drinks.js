import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'drinks',
    title: 'Drinks',
    type: 'document',
    _type: 'drinks',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'orderNum',
            title: 'Order Number',
            type: 'number',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})
