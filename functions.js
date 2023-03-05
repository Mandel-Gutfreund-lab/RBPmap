var counter = 1; // A global variable for addInput function

// Dynamically add input fields
function addInput(divName){

      var newdiv = document.createElement('div');
      newdiv.innerHTML = (counter + 1) + ".&nbsp;&nbsp;Motif: <input type='text' name='new_motif' />&nbsp;&nbsp;&nbsp; Protein name: <input type='text' name='new_motif_name' value='User"+(counter + 1)+"' />";      
      newdiv.style.marginTop = "3px";
      newdiv.id = divName + "_" + (counter+1);
      document.getElementById(divName).appendChild(newdiv);
      counter++;      
}

function Enable(Elem, ID, className)
{
	var en_el = document.getElementById(ID);	
	en_el.className = className;
	Elem.disabled = false;	
}

function Disable(Elem, ID, className)
{
	var en_el = document.getElementById(ID);	
	en_el.className = className;
	Elem.disabled = true;
}

// open popup window
function popup(mylink, windowname, width, height)
{
	if (! window.focus)return true;
	var href;
	if (typeof(mylink) == 'string')
   		href=mylink;
	else
	   href=mylink.href;
	window.open(href, windowname, 'width='+width+',height='+height+',scrollbars=yes');
	return false;
}

// Open / close div block and change the arrow
function changeDisplay(blockID, imgID){
	var block_elem = document.getElementById(blockID);
	var img_elem = document.getElementById(imgID);
	
	if (block_elem.style.display == "none"){
		block_elem.style.display = "block";
		img_elem.src = "images/minus_14.png";
	}
	else{
		block_elem.style.display = "none";
		img_elem.src = "images/plus_14.png";
	}
}


//
function SetByGenome () {

	var x = document.RBPmap_form;
	var genomeElem = x.genome;

	if (genomeElem.options[genomeElem.selectedIndex].value=='other'){ 
		Disable(document.RBPmap_form.db, 'DB', 'disabled_font'); 
		x.db.options.length = 1;
		x.db.options[0].innerHTML = '---'; 
		x.db.options[0].value = "";
		Disable(x.is_conservation, 'CONSERVATION', 'disabled_font'); 
		Disable(x.pssm_file, 'matrix_file', 'disabled_font_normal');
		x.is_user_pssm.disabled = true;
	} 
	else {
		Enable(x.db, 'DB', 'font2');
		Enable(x.is_conservation, 'CONSERVATION', 'font2'); 
		Enable(x.pssm_file, 'matrix_file', 'basic_font');
		x.is_user_pssm.disabled = false;
		
		if (genomeElem.options[genomeElem.selectedIndex].value=='human') {
			x.db.options.length = 3;
			x.db.options[0].innerHTML = 'Dec. 2013 (GRCh38/hg38)';
			x.db.options[0].value = 'hg38';
			x.db.options[0].selected = "selected";
			x.db.options[1].innerHTML = 'Feb. 2009 (GRCh37/hg19)';
			x.db.options[1].value = 'hg19';
			x.db.options[2].innerHTML = 'Mar. 2006 (NCBI36/hg18)';
			x.db.options[2].value = 'hg18';
		}
		if (genomeElem.options[genomeElem.selectedIndex].value=='mouse') {
			x.db.options.length = 2;
			x.db.options[0].innerHTML = 'Dec. 2011 (GRCm38/mm10)';
			x.db.options[0].value = 'mm10';
			x.db.options[0].selected = "selected";
			x.db.options[1].innerHTML = 'Jul. 2007 (NCBI37/mm9)';
			x.db.options[1].value = 'mm9';

		}
		if (genomeElem.options[genomeElem.selectedIndex].value=='drosophila') {
			x.db.options.length = 1;
			x.db.options[0].innerHTML = 'Apr. 2006 (BDGP R5/dm3)';
			x.db.options[0].value = 'dm3'; 
		}
	}
}


function loadData() {
	var x=document.RBPmap_form;
	
	x.genome.options[0].selected = "selected";
	x.db.options.length = 3;
	x.db.options[0].innerHTML = 'Dec. 2013 (GRCh38/hg38)';
	x.db.options[0].value = 'hg38';
	x.db.options[1].innerHTML = 'Feb. 2009 (GRCh37/hg19)';
	x.db.options[1].value = 'hg19';
	x.db.options[1].selected = "selected";
	x.db.options[2].innerHTML = 'Mar. 2006 (NCBI36/hg18)';
	x.db.options[2].value = 'hg18';
			
	x.seq_method[0].checked = "checked";
	x.sequence.disabled = false;
	x.sequence.value = "chr7:55270459-55270769:+";
	x.seq_file.disabled = true;
	
	x.db_selection[1].checked = "checked";
	document.getElementById('selection').innerHTML = "<b>Selected motifs:</b> HuR(Hs/Mm):uukruuu, PUM2(Hs/Mm):uguanaua";
	document.getElementById('selection').style.visibility= "visible";
	document.getElementById('selection').style.lineHeight = "12px";
	document.getElementById('selection').style.paddingTop = "5px"; 
	x.motifs_selection.value = "38,62";
	x.is_user_pssm.checked = false;
	x.pssm_file.disabled = true;
	
	x.stringency.options[1].selected = "selected";
	x.is_conservation.checked = true;
	
	x.job_name.value = "EGFR 3'UTR example";
	document.getElementById('general_block').style.display = "block";
	document.getElementById('general_img').src = "images/minus_14.png";
}

function resetSelection() {
	var x=document.RBPmap_form;
	
	x.genome.options[0].selected = "selected";
	x.db.options.length = 3;
	x.db.options[0].innerHTML = 'Dec. 2013 (GRCh38/hg38)';
	x.db.options[0].value = 'hg38';
	x.db.options[0].selected = "selected";
	x.db.options[1].innerHTML = 'Feb. 2009 (GRCh37/hg19)';
	x.db.options[1].value = 'hg19';
	x.db.options[2].innerHTML = 'Mar. 2006 (NCBI36/hg18)';
	x.db.options[2].value = 'hg18';
	
	x.seq_method[0].checked = "checked";
	x.sequence.disabled = false;
	x.sequence.value = "";
	x.seq_file.disabled = true;
	
	x.db_selection[0].checked = "checked";
	document.getElementById('selection').innerHTML = "";
	document.getElementById('selection').style.visibility= "hidden";
	x.motifs_selection.value = "";
	x.is_user_consensus.checked = false;
	x.new_motif.disabled = true;
	x.new_motif.value = "";
	x.new_motif_name.disabled = true;
	x.new_motif_name.value = "User1";
	
	// delete the additional user-defined motifs (if any)
	var parent=document.getElementById("new_motifs");
	if (counter > 1){
		for (i=2 ; i<=counter ; i++){
			childID = "new_motifs_" + i;
			parent.removeChild(document.getElementById(childID));
		}
	}
	counter = 1;
	
	x.is_user_pssm.checked = false;
	x.pssm_file.disabled = true;

	x.stringency.options[1].selected = "selected";
	x.is_conservation.checked = true;
	
	x.job_name.value = "";
	document.getElementById('advanced_block').style.display = "none";
	document.getElementById('advanced_img').src = "images/plus_14.png";
	document.getElementById('general_block').style.display = "none";
	document.getElementById('general_img').src = "images/plus_14.png";
	document.getElementById('sample_block').style.display = "none";
	document.getElementById('sample_img').src = "images/plus_14.png";
}

// Search validation
function validateSearch() {
	x=document.RBPmap_form;
	if (document.getElementById('PROTEIN_NAME').value == "" || document.getElementById('PROTEIN_NAME').value == null){
		alert("Please enter a protein name");
		document.getElementById('PROTEIN_NAME').focus();
		return false;
	}
	else {
		return true;
	}
}

// Form validation
function Validate() {
	
	x=document.RBPmap_form;
	
	// ******* Input section validation ****************
	// sequence input is checked
	if (x.seq_method[0].checked == true) {
		if (x.sequence.value == "" || x.sequence.value == null){
			alert("Please paste at least one sequence or genomic coordinates");
			x.sequence.focus();
			return false;
		}
		
	}
	// file input is checked
	else {
		if (x.seq_file.value == "" || x.seq_file.value == null){
			alert("Please upload an input file");
			x.seq_file.focus();
			return false;
		}
	}
	
	//******************** Motifs section validation ****************
	
	// Verify that at least one motif is selected (either from the DB or new)
	if ((x.motifs_selection.value == "" || x.motifs_selection.value == "None") && x.is_user_consensus.checked == false && x.is_user_pssm.checked == false) {
		alert("You must select or enter at least one motif");
		document.getElementById('PROTEIN_NAME').focus();
		return false;
	}
	
	
	// Validate the new consensus motifs (if any)
	if (x.is_user_consensus.checked == true) {
	
		 // Array - more than one motif
		if (typeof(x.new_motif.length) !== 'undefined'){
			//found_motif = 0;
			// The first motif is empty
			if (x.new_motif[0].value == "" || x.new_motif[0].value == null){
				alert("The consensus motif field is empty. Either fill a valid consensus motif or uncheck this option.");
				x.new_motif[0].focus();
				return false;
			}
			for (j=0 ; j<x.new_motif.length ; j++){
				// The motif field is not empty
				if (x.new_motif[j].value != "" && x.new_motif[j].value != null){
					// Verify that the motif has only valid characters and 4-10 length
					motif_reg = /^[acgturymkswbdhvn]{4,10}$/i;
					if (!motif_reg.test(x.new_motif[j].value)) {
						alert("Motif " + (j+1) + " is invalid, please enter again.\n The motif should be 4-10 bp long and contain only IUPAC symbols.");
						x.new_motif[j].focus();
						return false;
					}
					// Verify that the motif name field is not empty
					if (x.new_motif_name[j].value == "" || x.new_motif_name[j].value == null){
						alert("Please enter a name for motif " + (j+1));
						x.new_motif_name[j].focus();
						return false;
					}
					//found_motif = 1;
				}
			}
		}
		// Scalar - one motif
		else { 
			if (x.new_motif.value != "" && x.new_motif.value != null){
				// Verify that the motif has only valid characters and 4-10 length
					motif_reg = /^[acgturymkswbdhvn]{4,10}$/i;
					if (!motif_reg.test(x.new_motif.value)) {
						alert("The new motif is invalid, please enter again.\nThe motif should be 4-10 bp long and contain IUPAC symbols only.");
						x.new_motif.focus();
						return false;
					}
				// Verify that the motif name field is not empty
				if (x.new_motif_name.value == "" || x.new_motif_name.value == null){
					alert("Please enter a protein name");
					x.new_motif_name.focus();
					return false;
				}
			}
			else {
				alert("The consensus motif field is empty. Either fill a valid consensus motif or uncheck this option.");
				x.new_motif.focus();
				return false;
			}

		}
	}
	
	if (x.is_user_pssm.checked == true && (x.pssm_file.value == "" || x.pssm_file.value == null)) {
		alert("No probability matrix file. Either upload a matrix file in MEME format or uncheck this option.");
		x.pssm_file.focus();
		return false;

	}
	
	// ************ Email validation *****************
	if (x.is_email.checked) { // Validate e-mail only if is_email is checked
		// Verify that the email field is not empty
		if (x.email.value == "" || x.email.value == null){
			alert("Please enter your E-mail address");
			x.email.focus();
			return false;
		}
		else {
			// Validate email
  			email_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if (!email_reg.test(x.email.value)) {
				alert("Invalid E-mail address, please enter again");
				x.email.focus();
				return false;
			}
		}
	}
}
