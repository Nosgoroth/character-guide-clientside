// Rename to characterIndexCustom.js
// You can use this file to extend characterdex.js by overwriting functions


Character.prototype.toCsvExportObject = function(){
	// use "this.fields"
	return {
		"Term (日本語)": this.fields.nameJp,
		"Japanese reading": this.more.nameJpReading,
		"Term (English)": this.getName(this.getBook()),
		"Description (English)": this.getBlurb(this.getBook()),
		"Kind of term": this.getCategory(),
		"LN First Appearance": this.more.lnFirst,
		"Manga First Appearance": this.more.mangaFirst,
		"Notes": this.more.notes,
	};
}

/*
FormController.prototype.csvExportPreprocessCharacters = function(characters){
	return characters.sort((a, b) => {
		return a.getBook() - b.getBook();
	});
}
*/