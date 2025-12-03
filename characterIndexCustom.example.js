// Rename to characterIndexCustom.js
// You can use this file to extend characterdex.js by overwriting functions

Character.prototype.toCsvExportObject = function(){
	return {
		"Term (日本語)": this.getField("nameJp"),
		"Japanese reading": this.getMoreField("nameJpReading"),
		"Term (English)": this.getName(),
		"Description (English)": this.getBlurb(),
		"Kind of term": this.getCategory(),
		"LN First Appearance": this.getMoreField("lnFirst"),
		"Manga First Appearance": this.getMoreField("mangaFirst"),
		"Notes": this.getMoreField("notes"),
	};
}

/*
FormController.prototype.csvExportPreprocessCharacters = function(characters){
	return characters.sort((a, b) => {
		return a.getBook() - b.getBook();
	});
}
*/