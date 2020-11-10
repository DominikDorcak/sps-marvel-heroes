export interface Character {
    id?: number // The unique ID of the character resource.,
    name?: string //The name of the character.,
    description?: string//A short bio or description of the character.,
    modified?: Date //The date the resource was most recently modified.,
    resourceURI?: string //The canonical URL identifier for this resource.,
    urls?: Array<Url> //A set of public web site URLs for the resource.,
    thumbnail?: Image  //The representative image for this character.,
    comics?: ComicList //A resource list containing comics which feature this character.,
    stories?: StoryList //A resource list of stories in which this character appears.,
    events?: EventList //A resource list of events in which this character appears.,
    series?: SeriesList //A resource list of series in which this character appears.
}

export interface Url {
    type?: string
    url?: string
}

export interface Image {
    path?: string
    extension?: string
}

export interface ComicList {
    availible?: number
    returned?: number
    collectionURI?: string
    items?: Array<ComicSummary>
}

export interface ComicSummary {
    resourceURI?: string
    name?: string
}

export interface StoryList {
    availible?: number
    returned?: number
    collectionURI?: string
    items?: Array<StorySummary>
}

export interface StorySummary {
    resourceURI?: string
    name?: string
    type?: string
}

export interface EventList {
    availible?: number
    returned?: number
    collectionURI?: string
    items?: Array<EventSummary>
}

export interface EventSummary {
    resourceURI?: string
    name?: string
}

export interface SeriesList {
    availible?: number
    returned?: number
    collectionURI?: string
    items?: Array<SeriesSummary>
}

export interface SeriesSummary {
    resourceURI?: string
    name?: string
}