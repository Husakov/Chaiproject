import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(names: any, sortterm: any): any {
    //prvo provjerimo da li je undefind search term
    if (sortterm === undefined) return names;
    //sada tek vracamo updatovan array
    return names.filter(function (employee) {
      return employee.name.toLowerCase().includes(sortterm.toLowerCase());

    })
  }

}
