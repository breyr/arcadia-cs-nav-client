import { redirect, type Actions } from "@sveltejs/kit";

// form action for registers
export const actions: Actions = {
    login: async ({ request, locals }) => {
        const data = Object.fromEntries(await request.formData()) as {
            email: string,
            password: string,
        }
        try {
            // log user in
            await locals.pb.collection('users').authWithPassword(data.email, data.password);
        } catch (e) {
            console.log(e);
            throw e;
        }

        redirect(303, '/')
    }
}