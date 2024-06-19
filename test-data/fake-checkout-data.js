import { faker } from '@faker-js/faker';
export function createFakeCheckoutData() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const zipCode = faker.location.zipCode();
    console.log(`Generating fake checkout data: ${firstName}, ${lastName}, ${zipCode}`);
    return {
        firstName,
        lastName,
        zipCode,
    }
}
