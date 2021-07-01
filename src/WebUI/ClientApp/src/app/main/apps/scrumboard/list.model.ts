import { RovaUtils } from '@rova/utils';

export class List
{
    id: string;
    name: string;
    idCards: string[];

    /**
     * Constructor
     *
     * @param list
     */
    constructor(list)
    {
        this.id = list.id || RovaUtils.generateGUID();
        this.name = list.name || '';
        this.idCards = [];
    }
}
