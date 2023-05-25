import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'about',
    title: 'About Page',
    type: 'document',
    _type: 'about',
    fields: [
        defineField({
            name: 'slogan',
            title: 'Slogan/Funfact',
            type: 'text',
        }),
        defineField({
            name: 'image1',
            title: 'Slogan Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'familyHistory',
            title: 'Family History',
            type: 'text',
        }),
        defineField({
            name: 'image2',
            title: 'Family History Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'item1',
            title: 'Popular Item 1',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'item2',
            title: 'Popular Item 2',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'item3',
            title: 'Popular Item 3',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'action',
            title: 'Action Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'egg',
            title: 'Egg Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),

    ],
})
