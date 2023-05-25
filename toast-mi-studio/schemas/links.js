import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'links',
    title: 'Links/Social',
    type: 'document',
    _type: 'links',
    fields: [
        defineField({
            name: 'cloverGL',
            title: 'Clover Link (Green Lake)',
            type: 'string',
        }), defineField({
            name: 'doordashGL',
            title: 'Doordash Link (Green Lake)',
            type: 'string',
        }),
        defineField({
            name: 'ubereatsGL',
            title: 'UberEats Link (Green Lake)',
            type: 'string',
        }),
        defineField({
            name: 'grubhubGL',
            title: 'Grub Hub Link (Green Lake)',
            type: 'string',
        }),
        defineField({
            name: 'cloverTC',
            title: 'Clover Link (Tacoma)',
            type: 'string',
        }), defineField({
            name: 'doordashTC',
            title: 'Doordash Link (Tacoma)',
            type: 'string',
        }),
        defineField({
            name: 'ubereatsTC',
            title: 'UberEats Link (Tacoma)',
            type: 'string',
        }),
        defineField({
            name: 'grubhubTC',
            title: 'Grub Hub Link (Tacoma)',
            type: 'string',
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram',
            type: 'string',
        }),
        defineField({
            name: 'yelp',
            title: 'Yelp',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'facebook',
            title: 'Facebook',
            type: 'string',
        })
    ],
})
