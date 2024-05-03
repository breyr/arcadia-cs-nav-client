import { redirect, type Actions } from "@sveltejs/kit";

// form action for registers
export const actions: Actions = {
    register: async ({ request, locals }) => {
        const data = Object.fromEntries(await request.formData()) as {
            username: string,
            email: string,
            password: string,
            passwordConfirm: string,
        }
        try {
            // create new user
            await locals.pb.collection('users').create(data);
            // log user in
            await locals.pb.collection('users').authWithPassword(data.email, data.password);
        } catch (e) {
            console.log(e);
            throw e;
        }

        redirect(303, '/')
    }
}