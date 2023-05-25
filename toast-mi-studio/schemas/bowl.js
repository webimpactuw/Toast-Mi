import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'bowl',
    title: 'Rice & Salad Bowl',
    type: 'document',
    _type: 'bowl',
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
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        })
    ],
})
