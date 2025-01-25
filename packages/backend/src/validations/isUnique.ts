import { database } from "@/config/db.config";
import vine from "@vinejs/vine";

type TOptions = {
	collection: string;
	field: string;
};

export const isUnique = vine.createRule(
	async (value: unknown, options: TOptions, field) => {
		if (typeof value !== "string") {
			return;
		}

		const document = await database.collection(options.collection).findOne({
			[options.field]: value,
		});

		// If a user is found, throw an error
		if (document) {
			field.report(
				"The {{ field }} is present in the DB",
				"email.unique",
				field,
			);
		}
	},
);
