import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import customElement from '@dojo/framework/widget-core/decorators/customElement';
import { v } from '@dojo/framework/widget-core/d';

@customElement({
    tag: 'triangle-item',
    events: [],
    attributes: ['text'],
    properties: []
})
export default class TriangleItem extends WidgetBase<{ text: string }> {
    protected render() {
        const { text } = this.properties;
        return v('span', {}, [text]);
    }
}
