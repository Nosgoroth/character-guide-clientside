// Rename to characterIndexCustom.js
// You can use this file to extend characterdex.js by overwriting functions


Character.prototype.toCsvExportObject = function(){
	// use "this.fields"
	// The "this.fields.more?" syntax is sto avoid 
	return {
		"Term (日本語)": this.fields.nameJp,
		"Japanese reading": this.fields.more?.nameJpReading,
		"Term (English)": this.getName(this.getBook()),
		"Description (English)": this.getBlurb(this.getBook()),
		"Kind of term": this.getCategory(),
		"LN First Appearance": this.fields.more?.lnFirst,
		"Manga First Appearance": this.fields.more?.mangaFirst,
		"Notes": this.fields.more?.notes,
	};
}

/*
FormController.prototype.csvExportPreprocessCharacters = function(characters){
	//array of objects
	characters.sort((a,b) => {
		return a.getBook() - b.getBook();
	});
	return characters;
}
*/