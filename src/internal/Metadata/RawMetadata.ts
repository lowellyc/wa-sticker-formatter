import { IRawMetadata, Metadata } from '../../Types'
import Utils from '../../Utils'

export default class RawMetadata implements IRawMetadata {
    emojis: string[]
    'sticker-pack-id': string
    'sticker-pack-name': string
    'sticker-pack-publisher': string
    'publisher-website': string
    constructor(options: Metadata) {
        this['sticker-pack-id'] = options.id || Utils.generateStickerID()
        this['sticker-pack-name'] = options.pack || ''
        this['sticker-pack-publisher'] = options.author || ''
        this['publisher-website'] = options.publisher_website || ''
        this.emojis = options.categories || []
    }
}
