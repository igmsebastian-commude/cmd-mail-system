<!DOCTYPE html>
<html>
<body>
<center><p><img src="https://www.commude.ph/assets/images/commude_logo.png" alt=""></p></center>
<font face="'Roboto', sans-serif">
<p>Good day {{ $company['name'] }} !</p>
<p>I am {{ auth()->user()->name }}, a {{ auth()->user()->position }} from Commude Philippines, Inc.</p>
<p>Our headquarter is currently located in Tokyo, Japan where we engage in developing web sites as well as systems and application for smartphones and tablets.
In March 2017, we expanded our development in Makati City, Philippines where our developers are managed by Japanese directors allowing us to reduce our production costs while maintaining quality in our works.</p>
<p>We have worked with several global Japanese companies (such as those in the automotive and camera industry) as well as international sporting events.
We are currently expanding our network of clientele and would like to partner up with your company in development.</p>
<p>We can provide you and your clients an affordable quality development team through this partnership.
We can work in the following formats:
Project Based
Quotation is made per project.
Period Based
Quotation is made based on a specified period of time where you can manage a selected team of developers remotely.
<ul>
<li style="list-style-type:none;">
<b>Our services:</b>
	<ul style="list-style-type:circle;">
    <li>CMS (WordPress) Web Development</li>
	<li>WordPress plugin development</li>
	<li>HTML Web Development</li>
	<li>App Development (iOS, Android)</li>
	<li>Casual Mobile Games(Unity)</li>
	<li>System Development</li>
	<li>Web Design</li>
    </ul>
</li>
</ul></p>
<p>To get to know more about us, kindly see our company profile:
<a href="https://drive.google.com/file/d/11IXZeOAmPsWOzU4-Db2Y1q7Inx1zWlU8/view?usp=sharing">Commude Company Profile</a>
<p>You may also check our corporate site:
    <ul style="list-style-type:none;">
        <li><a href="https://www.commude.co.jp/">COMMU:DE Japan Site</a></li>
        <li><a href="https://commude.ph/">COMMUDE Philippines Site</a></li>
    </ul>
</p>
<p>We would like to discuss more about this opportunity with you.
If you have any questions or would like to try a prototype with us just let us know through email.</p>
<p>We thank you, and look forward to hearing from you.</p>
<p>Best Regards,</p>
<p>{{ auth()->user()->name }}<br>
{{ auth()->user()->position }}<br>
Commude Philippines, Inc.<br>
E-mail: {{ auth()->user()->email }}</p>
</font>
</body>
</html>
