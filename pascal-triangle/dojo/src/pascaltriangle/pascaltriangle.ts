import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import customElement from '@dojo/framework/widget-core/decorators/customElement';
import { v } from '@dojo/framework/widget-core/d';

let _length = 100;

function generateData(rows: number) {
    const n = rows;

    const data = [];
    data[0] = [1];
    data[1] = [1, 1];

    for (let row = 2; row < n; row++) {
        data[row] = [1];

        for (let col = 1; col <= row - 1; col++) {
            const prevRow = data[row - 1];
            data[row][col] = prevRow[col] + prevRow[col - 1];
            data[row].push(1);
        }
    }
    return data;
}

@customElement({
    tag: 'pascal-triangle',
    attributes: [],
    properties: [],
    events: []
})
export default class PascalTriangle extends WidgetBase {
    length = _length;
    list: number[][] = generateData(this.length);

    protected render() {
        return v('div', [
            v('div', [
                v(
                    'button',
                    {
                        'data-value': '10',
                        onclick: this.handleLoad
                    },
                    ['Load 10']
                ),
                v(
                    'button',
                    {
                        'data-value': '100',
                        onclick: this.handleLoad
                    },
                    ['Load 100']
                ),
                v(
                    'button',
                    {
                        'data-value': '500',
                        onclick: this.handleLoad
                    },
                    ['Load 500']
                )
            ]),
            v(
                'div',
                this.list.map(line =>
                    v(
                        'div',
                        line.map(item =>
                            v('triangle-item', {
                                text: `${item}`
                            })
                        )
                    )
                )
            )
        ]);
    }

    handleLoad(e: MouseEvent) {
		const target = e.target as HTMLElement;
        console.log('handleLoad: ', target.getAttribute('data-value'));
        this.length = parseInt(target.getAttribute('data-value') as string);
        this.list = generateData(this.length);
		this.invalidate();
    }
}
