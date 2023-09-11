import { usePage } from '@inertiajs/vue3';
import { toast } from "vue3-toastify";

const options = {
    theme: "dark",
    dangerouslyHTMLString: true,
};

function showAlert(message, type) {
    if (message) {
        toast[type](message, options);
    }
}

export function showToast(validationErrors = null) {
    const messages = usePage().props;
    const { success, info, error } = messages.flash;

    if (validationErrors) {
        const errorList = Object.entries(validationErrors)
            .map(([key, value]) => `${key}: ${value}`)
            .join('<br>');

        showAlert(messages?.flash?.error + `<ul class='list-disc pl-6 text-sm'>${errorList}</ul>`, 'error');
    } else {
        showAlert(success, 'success');
        showAlert(info, 'info');
        showAlert(error, 'error');
    }
}

