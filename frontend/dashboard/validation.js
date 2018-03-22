function mainValidate()
{
	var name = document.form.Name.value;
	// var name = document.forms["form"]["Name"].value;
	// var name = document.getElementById("n").value;
	var addr = document.form.Address.value;
	var city = document.form.City.value;
	var country = document.form.Country.value;
	var postcode = document.form.Postcode.value;
	var yes = document.form.Yes;
	var no = document.form.No;

	if(name_validate(name))
	{
		if(addr_validate(addr))
		{
			if(city_validate(city))
			{
				if(country_validate(country))
				{
					if(postcode_validate(postcode))
					{
						if(choice_validate(yes, no))
						{
							alert("Form submitted successfully."); 
							return true;	
						}
					}
				}
			}
		}
	}
	return false;
}

function name_validate(name)
{
	var letters = /^[A-Z a-z]+$/;
	if(name=="")
	{
		alert("Please enter name!");
		return false;
	}
	else
	{
		if(name.match(letters))
		{
			return true;
		}
		else
		{
			alert("Invalid Name!");
			return false;
		}
	}
}

function addr_validate(addr)
{
	var addr_format = /^[0-9 A-Z a-z]+$/;
	if(addr=="")
	{
		alert("Please enter Address!");
		return false;
	}
	else
	{
		if(addr.match(addr_format))
		{
			return true;
		}
		else
		{
			alert("Invalid Address!");
			return false;
		}
	}
}

function city_validate(city)
{
	var city_format = /^[A-Z a-z]+$/;
	if(city.match(city_format))
	{
		return true;
	}
	else
	{
		alert("Invalid City!");
		return false;
	}
}


function country_validate(country)
{
	var country_format = /^[A-Z a-z]+$/;
	if(country=="")
	{
		alert("Please enter Country!");
		return false;
	}
	else
	{
		if(country.match(country_format))
		{
			return true;
		}
		else
		{
			alert("Invalid Country!");
			return false;
		}
	}
}

function postcode_validate(postcode)
{
	var numbers = /^[0-9]+$/;
	if(postcode=="")
	{
		alert("Please enter Postcode!");
		return false;
	}
	else
	{
		if(postcode.match(numbers))
		{
			if(postcode.length==6)
			{
				return true;
			}
			else
			{
				alert("Postcode cannot be of more than 6 digits!");
				return false;
			}
		}
		else
		{
			alert("Invalid Postcode!");
			return false;
		}
	}
}

function choice_validate(yes, no)
{
	x=0;
	if(yes.checked) 
	{
		x++;
	} 
	if(no.checked)
	{
		x++; 
	}
	
	if(x==0)
	{
		alert("Choose Yes/No");
		return false;
	}
	else
	{
		return true;
	}
}
