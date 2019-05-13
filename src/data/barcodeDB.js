export const barcodeDB = [
    {
        gtin: '234',
        catNumber: 'LK016.P',
        name: 'Kappa Free ProSpec Kit',
        category: 'architect'
    },
    {
        gtin: '456',
        catNumber: 'LK018.P',
        name: 'Lambda Free ProSpec Kit',
        category: 'architect'

    },
    {
        gtin: '123',
        catNumber: 'OSAL155',
        name: 'IL6',
        category: 'radiometer'

    },
    {
        gtin: '00842768009648',
        catNumber: 'OSAL155',
        name: 'ALBU',
        category: 'architect'

    },
    {
        gtin: '111',
        catNumber: 'OSAL155',
        name: 'N-Kuvettensegmente fur BN ProS',
        category: 'architect'

    }
    
]


export const architect = [
    
    {catNumber: 'OSAL155', name: 'HBsAg', amount: 0},
    {catNumber: 'OSAL155',name: 'Anti-HCV', amount: 0},
    {catNumber: 'OSAL155',name: 'CRP', amount: 0}
]

export const chooseCat = (barcodeDB, category) => {
    barcodeDB.map((element) => {
        if (element.category === category) {
            return {catNumber: element.catNumber, name: element.name, amount: 0}
        }
    })
}