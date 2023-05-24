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
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        })
    ],
})
