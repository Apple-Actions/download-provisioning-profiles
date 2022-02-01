export interface Data<T> {
    /**
     * The opaque resource ID that uniquely identifies the resource.
     */
    id: string
    /**
     * The resource type.
     */
    type: ResourceType<T>
}
export interface Relationships<T> {}
export interface Links {
    related?: URL
    self?: URL
}
export declare type ResourceType<T> = T
