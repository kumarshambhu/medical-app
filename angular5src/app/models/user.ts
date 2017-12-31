export class User {
    constructor(public id: number, public username: string,
                public usertypeid: number, public usertypename: string) {
    }

    public resetUser() {
        return new User(0, '', 0, '');
    }
}
