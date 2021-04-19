export class CommandResponse<T> {

  //#region Properties

  public readonly id: string;

  public data: T;

  //#endregion

  //#region Constructor

  public constructor(id: string, data: T) {
    this.id = id;
    this.data = data;
  }

  //#endregion

}
